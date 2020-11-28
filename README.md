# Before running

I've added v-env to .gitignore. Please create a v-env and do `pip install -r requirements` before running the app

# To run the app

Activate your v-env with `source v-env/bin/activate` and run `uvicorn sql_app.main:app --reload`

# API doc

Once the app is running, open  `127.0.0.1:8000/docs` to view Swagger API docs

# Testing

I've only added a very few test cases, but to run the same, issue the command `pytest` while v-env is activated

# Folders
alembic: used for db migrations

sql_app: The actual application code resides here.

static: This folder was to serve static files. It is currently not being used.

requirements.txt: contains the dependencies of the project

sql_app.db: SqLite DB containing sample data

 ## Files inside sql_app
 
 crud.py: Services doing the actual query on the DB. In a real app this would be segregated into multiple files in a folder
 
 database.py: DB connection code
 
 main.py: Controllers for all apis
 
 models.py: DB models/schemas
 
 schemas.py: Classes defining structure of objects used for api req/res and services
 
 
 ## Misc
 
 The app uses SQLAlchemy as an ORM to perform CRUD operations on the SQLite DB.
 
 The app currently allows sign up as admin or user, but in a real app, only a superadmin should be able to add admins
 
 Even though FastAPI is an async framework, the database queries are synchronous. I used the query api but later realised that it doesn't have async apis.