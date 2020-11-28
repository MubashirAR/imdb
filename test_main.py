from fastapi.testclient import TestClient

from sql_app.main import app

client = TestClient(app)


def test_read_movies_all():
    response = client.get("/movies/all/")
    assert response.status_code == 200


def test_insert_movie():
    response = client.post("/movie/", {})
    assert response.status_code == 401


def test_authentication():
    response = client.post("/token", { "username": "admin", "password": "admin"})
    assert response.status_code == 200

