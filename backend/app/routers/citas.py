# app/routers/citas.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date
from .. import crud, schemas
from ..database import get_db

router = APIRouter(prefix="/citas", tags=["citas"])

@router.get("/ocupadas")
def horas_ocupadas(fecha: date, db: Session = Depends(get_db)):
    horas = crud.obtener_horas_ocupadas(db, fecha)
    return {"fecha": str(fecha), "horas_ocupadas": horas}

@router.post("/", response_model=schemas.Cita, status_code=201)
def reservar_cita(cita: schemas.CitaCreate, db: Session = Depends(get_db)):
    resultado = crud.crear_cita(db, cita)
    if resultado is None:
        raise HTTPException(status_code=409, detail="Esa hora ya está reservada")
    return resultado