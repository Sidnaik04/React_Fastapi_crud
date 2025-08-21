from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .database import engine
from .routers import router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    # "http://localhost:5173",
    # "https://react-fastapi-crud.vercel.app",
    "*"
]

# cors middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# include api router
app.include_router(router)
