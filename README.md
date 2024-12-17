# TODO App

This is a Full-stack Todo App that uses a Node.js backend, PostgreSQL db, Prisma ORM and JWT Authentication

## Functions:
- User authentication
- Add, update and delete todo list

## Technologies used

Languages:
- JavaScript

Libraries and frameworks:
- Node.js
- Prisma ORM
- Express
- Json web token
- Postgres DB
- Bcrypt

## Setup and usage

**Live page [here](...)**

**To host project locally**
- Clone the project: `git clone https://github.com/alextrandev/TODO_app_Node.js_Express.git`
- Make sure the Docker Desktop is installed and running
- Change working directory `cd TODO_app_Node.js_Express`
- Install dependencies `npm install`
- Generate Prisma client `npx prisma generate`
- Build the docker images `docker compose build`
- Create db migration and apply `docker compose run app npx prisma migrate dev --name init`
OR run/apply migrations: `docker-compose run app npx prisma migrate deploy`
- Start the containers `docker compose up -d`
- Access the local app on `http://localhost:5003`
- Try Signup, login, register on the browser
OR use the todo-app.rest (with VS Code's extension `REST Client`) to test

- To stop the container `docker compose down`
- Delete all container when done with the project `docker system prune`

## Screenshot

## Authors and acknowledgment

- Based on a guide from Smoljames Youtube: [Youtube link](https://www.youtube.com/@Smoljames)