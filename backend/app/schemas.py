

# app/schemas.py
from pydantic import BaseModel, field_validator
from datetime import date, time

class TipoCorteCreate(BaseModel):
    nombre: str

class TipoCorte(TipoCorteCreate):
    id: int

    class Config:
        from_attributes = True  # ← era orm_mode = True (cambio en Pydantic V2)

class BarberoCreate(BaseModel):                
    nombre: str

class Barbero(BarberoCreate):                  
    id: int
    class Config:
        from_attributes = True

class CitaCreate(BaseModel):
    fecha: date   # "2026-04-05"
    hora: str     # "09:00"

class Cita(CitaCreate):
    id: int
    class Config:
        from_attributes = True

class ReservaCreate(BaseModel):
    nombre: str
    telefono: str
    email: str
    fecha: date
    hora: time
    barbero: str
    servicio: str

    @field_validator("hora", mode="before")
    @classmethod
    def parse_hora(cls, v):
        if isinstance(v, str):
            return time.fromisoformat(v)
        return v
    
class ReservaResponse(ReservaCreate):
    id: int

    class Config:
        from_attributes = True


    class Config:
        from_attributes = True

