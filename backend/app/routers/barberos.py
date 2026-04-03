# app/routers/barberos.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/barberos",
    tags=["Barberos"]
)

@router.get("/", response_model=list[schemas.Barbero])
def listar_barberos(db: Session = Depends(get_db)):
    return crud.obtener_barberos(db)

@router.post("/", response_model=schemas.Barbero)
def crear_barbero(barbero: schemas.BarberoCreate, db: Session = Depends(get_db)):
    return crud.crear_barbero(db, barbero)