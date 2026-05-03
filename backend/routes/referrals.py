import os
import shutil
import uuid
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session
from database import get_db
from models import ReferralRequest
from schemas import ReferralOut

router = APIRouter(prefix="/referrals", tags=["Referrals"])
UPLOAD_DIR = os.getenv("UPLOAD_DIR", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("", response_model=ReferralOut)
def create_referral(
    job_id: int = Form(...),
    requester_id: int = Form(...),
    message: str = Form(..., min_length=10),
    resume: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    ext = os.path.splitext(resume.filename)[1].lower()
    if ext != ".pdf":
        raise HTTPException(status_code=400, detail="Resume must be PDF")

    filename = f"resume_{uuid.uuid4().hex}.pdf"
    resume_path = os.path.join(UPLOAD_DIR, filename)
    with open(resume_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    referral = ReferralRequest(job_id=job_id, requester_id=requester_id, resume_path=resume_path, message=message)
    db.add(referral)
    db.commit()
    db.refresh(referral)
    return referral


@router.get("/{user_id}", response_model=list[ReferralOut])
def list_referrals(user_id: int, db: Session = Depends(get_db)):
    return db.query(ReferralRequest).filter(ReferralRequest.requester_id == user_id).order_by(ReferralRequest.id.desc()).all()
