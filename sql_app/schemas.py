from typing import List, Optional, Literal

from pydantic import BaseModel, ValidationError, validator


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class User(BaseModel):
    username: str
    role: Literal['admin', 'user']


class UserInDB(User):
    hashed_password: str


class UserCreate(User):
    password: str
    email: str
    username: str

    @validator('username')
    def username_alphanumeric(cls, v):
        assert v.isalnum(), 'must be alphanumeric'
        return v


class AuthorizationError(Exception):
    def __init__(self, message, errors):
        super().__init__(message)
        self.errors = errors


class InvalidInputError(Exception):
    def __init__(self, message, errors):
        super().__init__(message)
        self.errors = errors


class Genre(BaseModel):
    name: str


class Movie(BaseModel):
    id: int
    popularity: int
    director: str
    genres: List[Genre] = []
    name: str
    imdb_score: float


class MovieCreate(BaseModel):
    is_active: bool = True
    popularity: int
    director: str
    genre: List[Genre] = []
    genres: List[Genre] = []
    name: str
    imdb_score: float


class MovieUpdate(Movie):
    id: int
    popularity: int
    director: str
    genre: List[Genre] = []
    name: str
    imdb_score: float
