from sqlalchemy.orm import Session
from . import models, schemas

def crear_reserva(db: Session, reserva: schemas.ReservaCreate):
    nueva_reserva = models.Reserva(**reserva.dict())
    db.add(nueva_reserva)
    db.commit()
    db.refresh(nueva_reserva)
    return nueva_reserva

def obtener_reservas(db: Session):
    return db.query(models.Reserva).all()