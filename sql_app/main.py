from typing import List

from fastapi import Request
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from . import crud, models, schemas
from .database import SessionLocal, engine
from fastapi import Depends, FastAPI, HTTPException, status
from jose import JWTError, jwt
from datetime import datetime, timedelta
import re

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost",
    "https://imdb-fynd-2020.web.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


ACCESS_TOKEN_EXPIRE_MINUTES = 30
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, crud.SECRET_KEY, algorithms=[crud.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = username
    except JWTError:
        raise credentials_exception
    user = crud.get_user(db, username=token_data)
    if user is None:
        raise credentials_exception
    return user


@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = crud.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/")
async def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user


@app.get("/movies/all")
async def read_movies(db: Session = Depends(get_db), page = 1):
    movies = crud.get_movies(db=db, page=int(page))
    return movies


@app.get("/movies/search")
async def read_movies_search(db: Session = Depends(get_db), query: str = '', page=1):
    movies = crud.get_movies_search(db=db, query=query, page=int(page))
    return movies


# POST APIs
@app.post("/users/", status_code=status.HTTP_201_CREATED)
def create_user(
        user: schemas.UserCreate, db: Session = Depends(get_db)
):
    if len(user.username) < 3:
        raise HTTPException(status_code=422, detail='Invalid Username, must be 3 or more characters')
    if not re.fullmatch(r'^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$', user.password):
        raise HTTPException(status_code=422, detail='Invalid Password, must be 8 or more characters, have atleast one alphabet and pne number')
    return crud.create_user(db=db, user=user)


@app.post("/movie/", status_code=status.HTTP_201_CREATED)
def create_movie(
        movie: schemas.MovieCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)
):
    return crud.create_movie(db=db, movie=movie, current_user=current_user)


# PUT APIs
@app.put("/movie/")
def update_movie(
        movie: schemas.MovieUpdate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)
):
    return crud.update_movie(db=db, movie=movie, current_user=current_user)


# DELETE APIs
@app.delete("/movie/")
def delete_movie(
        id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)
):
    if id is None:
        raise schemas.InvalidInputError('No such movie found!')
    return crud.delete_movie(db=db, id=int(id), current_user=current_user)

