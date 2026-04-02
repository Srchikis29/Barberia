from fastapi import FastAPI
from .database import Base, engine
from .routers import reservas

# Crear tablas automáticamente en PostgreSQL
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(reservas.router)