# app/models.py
from sqlalchemy import Column, Integer, String, Date, Time
from .database import Base

class TipoCorte(Base):
    __tablename__ = "tipos_corte"

    id     = Column(Integer, primary_key=True, index=True)  # Llave primaria
    nombre = Column(String(100), nullable=False, unique=True) # Ej: "Corte Clasico"

class Barbero(Base):                                          # ← nuevo
    __tablename__ = "barberos"
    id     = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False, unique=True)

class Cita(Base):
    __tablename__ = "citas"
    id = Column(Integer, primary_key=True, index=True)
    fecha = Column(Date, nullable=False)
    hora = Column(String(5), nullable=False)  # "09:00"
    barbero = Column(String, nullable=False)
    servicio = Column(String, nullable=False)  

class Reserva(Base):
    __tablename__ = "reservas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    telefono = Column(String, nullable=False)
    email = Column(String, nullable=False)

    fecha = Column(Date, nullable=False)
    hora = Column(Time, nullable=False)
    barbero = Column(String, nullable=False)
    servicio = Column(String, nullable=False)
