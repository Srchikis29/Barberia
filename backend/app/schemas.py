from pydantic import BaseModel
from datetime import date, time

class ReservaBase(BaseModel):
    nombre: str
    telefono: str
    email: str
    fecha: date
    hora: time
    servicio: str
    barbero: str

class ReservaCreate(ReservaBase):
    pass

class Reserva(ReservaBase):
    id: int

    class Config:
        from_attributes = True