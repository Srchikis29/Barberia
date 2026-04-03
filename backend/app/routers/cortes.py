# app/routers/cortes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/cortes",
    tags=["Tipos de Corte"]
)

# GET /cortes/ → Lista todos los cortes
@router.get("/", response_model=list[schemas.TipoCorte])
def listar_cortes(db: Session = Depends(get_db)):
    return crud.obtener_cortes(db)

# POST /cortes/ → Crea un nuevo corte
@router.post("/", response_model=schemas.TipoCorte)
def crear_corte(corte: schemas.TipoCorteCreate, db: Session = Depends(get_db)):
    return crud.crear_corte(db, corte)