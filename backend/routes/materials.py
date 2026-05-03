import os
import shutil
import uuid
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from database import get_db
from models import StudyMaterial
from schemas import StudyMaterialOut

router = APIRouter(prefix="/materials", tags=["Study Materials"])
UPLOAD_DIR = os.getenv("UPLOAD_DIR", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("", response_model=StudyMaterialOut)
def upload_material(
    title: str = Form(...),
    subject: str = Form(...),
    uploaded_by: int = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    ext = os.path.splitext(file.filename)[1].lower()
    if ext != ".pdf":
        raise HTTPException(status_code=400, detail="Only PDF uploads are allowed")

    filename = f"material_{uuid.uuid4().hex}.pdf"
    file_path = os.path.join(UPLOAD_DIR, filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    material = StudyMaterial(title=title, subject=subject, uploaded_by=uploaded_by, file_path=file_path)
    db.add(material)
    db.commit()
    db.refresh(material)
    return material


@router.get("", response_model=list[StudyMaterialOut])
def list_materials(db: Session = Depends(get_db)):
    return db.query(StudyMaterial).order_by(StudyMaterial.id.desc()).all()


@router.get("/{material_id}/download")
def download_material(material_id: int, db: Session = Depends(get_db)):
    material = db.get(StudyMaterial, material_id)
    if not material or not os.path.exists(material.file_path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(material.file_path, media_type="application/pdf", filename=os.path.basename(material.file_path))
