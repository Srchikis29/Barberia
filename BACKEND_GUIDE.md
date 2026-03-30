# Guía para Implementar Backend con FastAPI y PostgreSQL

## 1. Preparación del Entorno

### a. Instala Python y PostgreSQL
- Asegúrate de tener Python 3.9+ y PostgreSQL instalados en tu sistema.

### b. Crea un entorno virtual
```bash
python -m venv venv
# En Windows:
venv\Scripts\activate
```

### c. Instala FastAPI, Uvicorn y dependencias de base de datos
```bash
pip install fastapi uvicorn psycopg2-binary sqlalchemy alembic python-dotenv
```

---

## 2. Estructura Básica del Proyecto Backend

```
backend/
│
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   ├── database.py
│   └── routers/
│        └── reservas.py
│
├── alembic/
├── .env
└── requirements.txt
```

---

## 3. Configuración de la Base de Datos

### a. Crea la base de datos en PostgreSQL
```sql
CREATE DATABASE barberia;
```

### b. Crea un archivo `.env` en el backend:
```
DATABASE_URL=postgresql://usuario:contraseña@localhost/barberia
```

---

## 4. Conexión a la Base de Datos (`database.py`)

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

---

## 5. Modelos de Datos (`models.py`)

Ejemplo para reservas y servicios:
```python
from sqlalchemy import Column, Integer, String, Date, Time, ForeignKey
from .database import Base

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
```

---

## 6. Esquemas de Validación (`schemas.py`)

```python
from pydantic import BaseModel
from datetime import date, time

class ReservaCreate(BaseModel):
    nombre: str
    telefono: str
    email: str
    fecha: date
    hora: time
    barbero: str
    servicio: str

class Reserva(ReservaCreate):
    id: int
    class Config:
        orm_mode = True
```

---

## 7. Operaciones CRUD (`crud.py`)

```python
from sqlalchemy.orm import Session
from . import models, schemas

def crear_reserva(db: Session, reserva: schemas.ReservaCreate):
    db_reserva = models.Reserva(**reserva.dict())
    db.add(db_reserva)
    db.commit()
    db.refresh(db_reserva)
    return db_reserva

def obtener_reservas(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Reserva).offset(skip).limit(limit).all()
```

---

## 8. Rutas de la API (`routers/reservas.py`)

```python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, schemas, database

router = APIRouter()

@router.post("/reservas/", response_model=schemas.Reserva)
def crear_reserva(reserva: schemas.ReservaCreate, db: Session = Depends(database.SessionLocal)):
    return crud.crear_reserva(db, reserva)

@router.get("/reservas/", response_model=list[schemas.Reserva])
def listar_reservas(skip: int = 0, limit: int = 10, db: Session = Depends(database.SessionLocal)):
    return crud.obtener_reservas(db, skip, limit)
```

---

## 9. Archivo Principal (`main.py`)

```python
from fastapi import FastAPI
from .routers import reservas
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(reservas.router)
```

---

## 10. Migraciones con Alembic

- Inicializa Alembic:
  ```bash
  alembic init alembic
  ```
- Configura la URL de la base de datos en `alembic.ini`.
- Genera y aplica migraciones:
  ```bash
  alembic revision --autogenerate -m "init"
  alembic upgrade head
  ```

---

## 11. Correr el Servidor

```bash
uvicorn app.main:app --reload
```

---

## 12. Conexión con el Frontend

- El frontend puede hacer peticiones HTTP (fetch/axios) a los endpoints de FastAPI, por ejemplo:
  - POST `/reservas/` para crear una reserva.
  - GET `/reservas/` para listar reservas.

---

## 13. Notas según tu código actual

- Los formularios de reserva y contacto en React deben enviar los datos al backend usando fetch o axios.
- Los datos de servicios, barberos y horarios pueden gestionarse desde la base de datos para mayor flexibilidad.
- Puedes crear endpoints adicionales para servicios, barberos, etc., siguiendo el mismo patrón.

---

¡Sigue esta guía paso a paso para tener tu backend robusto y conectado a tu frontend React!
