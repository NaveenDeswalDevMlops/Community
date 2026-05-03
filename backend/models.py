from sqlalchemy import Boolean, Column, Enum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(120), unique=True, nullable=False, index=True)
    college = Column(String(150), nullable=False)
    branch = Column(String(100), nullable=False)
    year = Column(Integer, nullable=False)


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    subject = Column(String(100), nullable=False)
    price = Column(Numeric(10, 2), nullable=False, default=0)
    location = Column(String(120), nullable=False)
    is_donation = Column(Boolean, default=False)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    owner = relationship("User")


class StudyMaterial(Base):
    __tablename__ = "study_materials"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    subject = Column(String(100), nullable=False)
    file_path = Column(String(300), nullable=False)
    uploaded_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    uploader = relationship("User")


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    company = Column(String(150), nullable=False)
    location = Column(String(120), nullable=False)
    type = Column(Enum("intern", "full-time", name="job_type"), nullable=False)
    description = Column(Text, nullable=False)
    posted_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    referral_available = Column(Boolean, default=True)
    poster = relationship("User")


class ReferralRequest(Base):
    __tablename__ = "referral_requests"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"), nullable=False)
    requester_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    resume_path = Column(String(300), nullable=False)
    message = Column(Text, nullable=False)
    status = Column(Enum("pending", "accepted", "rejected", name="referral_status"), default="pending")

    job = relationship("Job")
    requester = relationship("User")
