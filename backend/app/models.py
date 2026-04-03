# app/models.py
from sqlalchemy import Column, Integer, String
from .database import Base

class TipoCorte(Base):
    __tablename__ = "tipos_corte"

    id     = Column(Integer, primary_key=True, index=True)  # Llave primaria
    nombre = Column(String(100), nullable=False, unique=True) # Ej: "Corte Clasico"