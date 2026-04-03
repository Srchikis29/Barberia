from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import schemas, crud

router = APIRouter(prefix="/reservas", tags=["Reservas"])

@router.post("/")
def crear_reserva(reserva: schemas.ReservaCreate, db: Session = Depends(get_db)):
    return crud.crear_reserva(db, reserva)