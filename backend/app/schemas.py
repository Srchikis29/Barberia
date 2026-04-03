

# app/schemas.py
from pydantic import BaseModel

class TipoCorteCreate(BaseModel):
    nombre: str

class TipoCorte(TipoCorteCreate):
    id: int

    class Config:
        from_attributes = True  # ← era orm_mode = True (cambio en Pydantic V2)