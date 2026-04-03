# app/crud.py
from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime, date, time

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

# --- Citas ---

def obtener_horas_ocupadas(db: Session, fecha: date):
    citas = db.query(models.Cita).filter(models.Cita.fecha == fecha).all()
    return [c.hora for c in citas]

def crear_cita(db: Session, cita: schemas.CitaCreate):
    # Verificar si ya existe esa fecha+hora
    existe = db.query(models.Cita).filter(
        models.Cita.fecha == cita.fecha,
        models.Cita.hora == cita.hora
    ).first()
    if existe:
        return None  # El router manejará el error 409
    db_cita = models.Cita(**cita.dict())
    db.add(db_cita)
    db.commit()
    db.refresh(db_cita)
    return db_cita

def crear_reserva(db: Session, cita: schemas.CitaCreate):

    # 🔥 convertir strings → date y time reales
    fecha_obj = datetime.strptime(str(cita.fecha), "%Y-%m-%d").date()
    hora_obj = datetime.strptime(str(cita.hora), "%H:%M:%S").time()

    nueva_reserva = models.Reserva(
        nombre=cita.nombre,
        telefono=cita.telefono,
        email=cita.email,
        fecha=fecha_obj,
        hora=hora_obj,
        barbero=cita.barbero,
        servicio=cita.servicio
    )

    db.add(nueva_reserva)
    db.commit()
    db.refresh(nueva_reserva)
    return nueva_reserva