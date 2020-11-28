from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Float, Table
from sqlalchemy.orm import relationship
from sqlalchemy_utils import EmailType
import datetime
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow)
    email = Column(EmailType)
    role = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)


genre_association_table = Table('movie_genre_association', Base.metadata,
    Column('movie_id', Integer, ForeignKey('movies.id')),
    Column('genre_id', Integer, ForeignKey('genres.id'))
)


class Genre(Base):
    __tablename__ = "genres"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    # name = Column(String, unique=True)


class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True)
    popularity = Column(Integer, index=True)
    director = Column(String(100))
    name = Column(String(200))
    imdb_score = Column(Float)
    is_active = Column(Boolean, default=True)
    genres = relationship("Genre", secondary=genre_association_table)


