from decimal import Decimal
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from database import get_db
from models import Book
from schemas import BookCreate, BookOut

router = APIRouter(prefix="/books", tags=["Books"])


@router.post("", response_model=BookOut)
def create_book(payload: BookCreate, db: Session = Depends(get_db)):
    book = Book(**payload.model_dump())
    db.add(book)
    db.commit()
    db.refresh(book)
    return book


@router.get("", response_model=list[BookOut])
def list_books(
    location: str | None = None,
    subject: str | None = None,
    max_price: Decimal | None = Query(default=None, ge=0),
    db: Session = Depends(get_db),
):
    query = db.query(Book)
    if location:
        query = query.filter(Book.location.ilike(f"%{location}%"))
    if subject:
        query = query.filter(Book.subject.ilike(f"%{subject}%"))
    if max_price is not None:
        query = query.filter(Book.price <= max_price)
    return query.order_by(Book.id.desc()).all()


@router.put("/{book_id}", response_model=BookOut)
def update_book(book_id: int, payload: BookCreate, db: Session = Depends(get_db)):
    book = db.get(Book, book_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    for key, value in payload.model_dump().items():
        setattr(book, key, value)
    db.commit()
    db.refresh(book)
    return book


@router.delete("/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db)):
    book = db.get(Book, book_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    db.delete(book)
    db.commit()
    return {"message": "Book deleted"}
