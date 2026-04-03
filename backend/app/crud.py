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