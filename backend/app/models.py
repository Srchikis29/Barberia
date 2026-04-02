from sqlalchemy import Column, Integer, String, Date, Time
from .database import Base

class Reserva(Base):
    __tablename__ = "reservas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    telefono = Column(String, nullable=False)
    email = Column(String, nullable=False)
    fecha = Column(Date, nullable=False)
    hora = Column(Time, nullable=False)
    servicio = Column(String, nullable=False)
    barbero = Column(String, nullable=False)