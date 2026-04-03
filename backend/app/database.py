# app/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()  # Lee las variables del archivo .env

DATABASE_URL = os.getenv("DATABASE_URL")

# Motor de conexión a PostgreSQL
engine = create_engine(DATABASE_URL)

# Cada petición tendrá su propia sesión de base de datos
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base que heredarán todos los modelos
Base = declarative_base()

# Función que abre y cierra la sesión automáticamente
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()