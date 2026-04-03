# app/crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def obtener_cortes(db: Session):
    return db.query(models.TipoCorte).all()

def crear_corte(db: Session, corte: schemas.TipoCorteCreate):
    db_corte = models.TipoCorte(**corte.dict())
    db.add(db_corte)
    db.commit()
    db.refresh(db_corte)
    return db_corte

# --- Barberos ---                             
def obtener_barberos(db: Session):
    return db.query(models.Barbero).all()

def crear_barbero(db: Session, barbero: schemas.BarberoCreate):
    db_barbero = models.Barbero(**barbero.dict())
    db.add(db_barbero)
    db.commit()
    db.refresh(db_barbero)
    return db_barbero