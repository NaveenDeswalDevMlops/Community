import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from database import Base, engine
from routes.books import router as books_router
from routes.jobs import router as jobs_router
from routes.materials import router as materials_router
from routes.referrals import router as referrals_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Campus Resource & Career Platform")

cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in cors_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

upload_dir = os.getenv("UPLOAD_DIR", "uploads")
os.makedirs(upload_dir, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=upload_dir), name="uploads")

app.include_router(books_router)
app.include_router(materials_router)
app.include_router(jobs_router)
app.include_router(referrals_router)


@app.get("/")
def health_check():
    return {"status": "ok", "service": "Campus Platform API"}
