
# Task Manager - Mode 2 (RESTful)

This project is a task management system built with Node.js, Express, and PostgreSQL,
following the RESTful architectural style.
It allows creating, listing, updating, and deleting tasks via API.

## Features

* List all tasks (`GET /task`)
* Create a new task (`POST /task`)
* Update an existing task (`PUT /task/:id`)
* Delete a task (`DELETE /task/:id`)

## Technologies Used

* Node.js
* Express
* PostgreSQL
* `pg` (PostgreSQL client)
* `dotenv` (environment variables)
* `cors` (enables cross-origin requests)
* `nodemon` (automatic server reload during development)

## Folder Structure

Modo 2/
│
├── src/
│   ├── config/         - Database connection
│   ├── controllers/    - Route logic (tarefasController.js)
│   ├── models/         - Database access (tarefasModel.js)
│   ├── routes/         - API routes
│   ├── app.js          - Initializes Express
│
├── server.js           - Starts the server
├── .env                - Environment variables
├── .gitignore          - Files ignored by Git
├── package.json        - Dependencies and scripts
├── README.md           - Project documentation


## Install


npm init -y
npm install express pg cors
npm install dotenv
npm install nodemon
npm install -g nodemon


## .env File

env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=


## Running the Server

nodemon server.js


