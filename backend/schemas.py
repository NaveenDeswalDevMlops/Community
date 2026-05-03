from decimal import Decimal
from typing import Literal, Optional
from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    college: str
    branch: str
    year: int = Field(ge=1, le=8)


class UserOut(UserCreate):
    id: int

    class Config:
        from_attributes = True


class BookBase(BaseModel):
    title: str
    subject: str
    price: Decimal = Field(ge=0)
    location: str
    is_donation: bool = False
    owner_id: int


class BookCreate(BookBase):
    pass


class BookOut(BookBase):
    id: int

    class Config:
        from_attributes = True


class StudyMaterialOut(BaseModel):
    id: int
    title: str
    subject: str
    file_path: str
    uploaded_by: int

    class Config:
        from_attributes = True


class JobCreate(BaseModel):
    title: str
    company: str
    location: str
    type: Literal["intern", "full-time"]
    description: str
    posted_by: int
    referral_available: bool = True


class JobOut(JobCreate):
    id: int

    class Config:
        from_attributes = True


class ReferralOut(BaseModel):
    id: int
    job_id: int
    requester_id: int
    resume_path: str
    message: str
    status: Literal["pending", "accepted", "rejected"]

    class Config:
        from_attributes = True
