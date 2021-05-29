# api-nodejs-actors-movies

This is a project API rest using Typescript with express and mysql database

Its my first API, made with classes in OOP principle, trying to follow SOLID, CLEAN and DDD pattern.

## How to run?

**config env variables**

`*.env file or setup variables*`

**my sql server**

```
DB_HOST = IP
DB_USER = LOGIN
DB_PW = PASSWORD
DB_SCHEMA = DATABSE
DB_PORT = DEFAULT PORT
```

**create tables**

`yarn migration:db`

**start dev mode**

`yarn dev`

**build to deploy**

`yarn build`

## Dependences:

- express
- mysql
- knex
- cors
- uuid
- colors

## Dev

- typescript
- ts-node-dev
- reflect-metadata

## ROUTES

### home

GET http://localhost:3000/

### ping

GET http://localhost:3000/ping

### table details

GET http://localhost:3000/actors/detail

### list all Actors

GET http://localhost:3000/actors

### create Actor

POST http://localhost:3000/actors

content-type: application/json

```
{
  "name": "Marcelinho Sandroni",
  "salary": 50000,
  "birthDate": "1995-12-31",
  "gender": "male"
}
```

### get a user by id

GET http://localhost:3000/actors/ID

### update a Actor by id

PUT http://localhost:3000/actors/ID

Content-Type: application/json

```
{
  "name": "Marcelinho Pernanbucano",
  "salary": 999,
  "birthDate": "1991-11-28",
  "gender": "male"
}
```

### delete a user by id

DELETE http://localhost:3000/actors/ID

## MOVIES

### detail of the table movies

GET http://localhost:3000/movies/detail

### list all Actors

GET http://localhost:3000/movies

### create Actor

POST http://localhost:3000/movies

content-type: application/json

```
{
  "title": "Interstellar",
  "sinopse": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  "releaseDate": "2014-11-06",
  "playingLimitDate": "2015-01-30"
}
```

### get a movie by id

http://localhost:3000/movies/ID

### update a Movie by id

PUT http://localhost:3000/movies/id

Content-Type: application/json

```
{
  "title": "X-Man",
  "sinopse": "Magneto kidnaps Marie, a young mutant, with the intention of using her powers to destroy humanity. However, the X-Men and Wolverine team up to save her and stop Magneto.",
  "releaseDate": "2000-07-12",
  "playingLimitDate": "2000-09-29"
}
```

### delete a Movie by id

DELETE http://localhost:3000/actors/ID
