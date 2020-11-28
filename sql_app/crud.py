from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
from . import models, schemas
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Optional
from fastapi import HTTPException

# USER CRUD
SECRET_KEY = "0ec8f700b3f4309b5eac62fc1528e883714239a98ebff53d879a9c4967d5ad8a"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

limit = 10


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db, username: str):
    return db.query(models.User).filter(models.User.username == username).first()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(username=user.username, hashed_password=get_password_hash(user.password), role=user.role,
                          email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# MOVIES CRUD


def get_movie(db, id: int):
    return db.query(models.Movie).filter(and_(models.Movie.id == id, models.Movie.is_active)).first()


def get_movies(db, page=1):
    print('get movies crud called', (page - 1) * limit, limit)
    movies = db.query(models.Movie).offset((page - 1) * limit).limit(limit).all()
    # genres not populating unless used? Couldn't find an alternative like "lean" in mongodb
    dict_movies = [movie.genres for movie in movies]
    print(dict_movies)
    return movies


def get_movies_search(db, query, page=1):
    print('get movies crud called')
    like_query = '%' + query + '%'
    movies = db.query(models.Movie).filter(
        and_(or_(models.Movie.name.ilike(like_query), models.Movie.director.ilike(like_query)),
             models.Movie.is_active == True)) \
        .offset((page - 1) * limit) \
        .limit(limit) \
        .all()
    dict_movies = [movie.genres for movie in movies]
    return movies


def create_movie_bulk(db: Session, movies: List[schemas.MovieCreate], current_user: models.User):
    if current_user.role != 'admin':
        raise schemas.AuthorizationError('You are not authorized for this request')
    for movie in movies:
        genres = db_genre_list(db, movie)
        db_movie = models.Movie(popularity=movie.popularity, director=movie.director, name=movie.name,
                            imdb_score=movie.imdb_score)
        db.add(db_movie)
        append_genres_to_movie(db, genres, db_movie)
        print(db_movie.genres)
    db.commit()
    db.refresh(db_movie)
    return db_movie


def create_movie(db: Session, movie: schemas.MovieCreate, current_user: models.User):
    if current_user.role != 'admin':
        raise schemas.AuthorizationError('You are not authorized for this request')
    # filter_existing_genres(db, movie)
    print('remaining items')
    print(movie.genre)
    genres = db_genre_list(db, movie)
    db.commit()
    db_movie = models.Movie(popularity=movie.popularity, director=movie.director, name=movie.name,
                            imdb_score=movie.imdb_score)
    db.add(db_movie)
    append_genres_to_movie(db, genres, db_movie)
    print(db_movie.genres)
    db.commit()
    db.refresh(db_movie)
    return db_movie


def db_genre_list(db, movie):
    genres = []
    for genre in movie.genre:
        db_genre = models.Genre(name=genre.name)
        genres.append(db_genre)
        db.merge(db_genre)
    return genres


# def filter_existing_genres(db, movie):
#     genres = movie.genre
#     genre_list_obj = {}
#     print('prinntt', genres)
#     genre_names = []
#     for genre in genres:
#         genre_names.append(genre.name)
#     db_genres = db.query(models.Genre).filter(models.Genre.name.in_(genre_names)).all()
#     for db_genre in db_genres:
#         genre_list_obj[db_genre.name] = db_genre
#     # Probably better to convert genres to obj as well as remove will run O(n) times
#     for index, genre in enumerate(genres):
#         if genre.name not in genre_list_obj:
#             # movie.
#             genres.pop(index)
#     movie.genre = genres


def append_genres_to_movie(db, genres, db_movie):
    for genre in genres:
        db_movie.genres.append(genre)


def update_movie(db: Session, movie: schemas.MovieCreate, current_user: models.User):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail='You are not authorized for this request')

    db_movie = db.query(models.Movie).filter(models.Movie.id == movie.id).first()
    if db_movie is None:
        raise HTTPException(status_code=422, detail='No such movie found!')
    db_movie.popularity = movie.popularity
    db_movie.name = movie.name
    db_movie.director = movie.director
    db_movie.imdb_score = movie.imdb_score
    db.commit()
    db.refresh(db_movie)
    return db_movie


def delete_movie(db: Session, id: int, current_user: models.User):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail='You are not authorized for this request')
    db_movie = db.query(models.Movie).filter(models.Movie.id == id).first()
    if db_movie is None:
        raise HTTPException(status_code=422, detail='No such movie found')
    db_movie.is_active = False
    db.commit()
    db.refresh(db_movie)
    return db_movie
