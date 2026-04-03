# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routers import cortes, barberos, citas, reservas



# Crea las tablas en la base de datos automáticamente
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Barbería API")

origins = [
    "http://localhost:5173",  # React Vite
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Registra las rutas de cortes
app.include_router(cortes.router)
app.include_router(barberos.router)
app.include_router(citas.router)
app.include_router(reservas.router)

@app.get("/")
def root():
    return {"mensaje": "API Barbería funcionando ✅"}