from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Job
from schemas import JobCreate, JobOut

router = APIRouter(prefix="/jobs", tags=["Jobs"])


@router.post("", response_model=JobOut)
def create_job(payload: JobCreate, db: Session = Depends(get_db)):
    job = Job(**payload.model_dump())
    db.add(job)
    db.commit()
    db.refresh(job)
    return job


@router.get("", response_model=list[JobOut])
def list_jobs(role: str | None = None, location: str | None = None, type: str | None = None, db: Session = Depends(get_db)):
    query = db.query(Job)
    if role:
        query = query.filter(Job.title.ilike(f"%{role}%"))
    if location:
        query = query.filter(Job.location.ilike(f"%{location}%"))
    if type:
        query = query.filter(Job.type == type)
    return query.order_by(Job.id.desc()).all()
