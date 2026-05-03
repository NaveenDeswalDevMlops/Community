# Campus Resource & Career Platform

Full-stack project with FastAPI + React + PostgreSQL for books, study materials, jobs, and referral workflows.

## Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Features
- Books CRUD with filters by location, subject, and max price.
- Study materials PDF upload/list/download.
- Jobs post/list with filters.
- Referral request flow with resume upload and status tracking.

## Folder Structure

- `backend/` FastAPI app, SQLAlchemy models, route modules.
- `frontend/` React + Tailwind UI with pages for dashboard, books, materials, and jobs/referrals.
- `backend/uploads/` local file storage simulating object storage.
