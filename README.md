# Express REST API take-home exercise

**Exercise written by [Andre Landgraf](https://andre-landgraf.dev/)**

We are TODOify, a Silicon Valley startup that aims to disrupt the TODO industry. For that, we are looking for YOU!

At TODOify, we strive to build world-class software. We are looking for a new teammate that can quickly iterate and prototype on new projects.

We plan to build an Express.js backend for our React frontend.

So far, we set up a mock wrapper for our database. We use MongoDB, so don't expect the database to run any validations.

We also already implemented a middleware to authenticate users using a search parameter (query param).

In this take-home exercise, we want you to implement the CRUD endpoints for users, projects, and todos.

Feel free to create a folder structure of your preference, but remember that we focus on moving fast, so keep it simple. Nothing wrong with having everything in index.js as well.

All requests look like follows:

`https://<your-app-name>.app/<entity-name>[/<identifier>]?tokenId=<auth-token-id>`.

E.g., to GET user with id 1:

`https://<your-app-name>.app/users/1?tokenId=<auth-token-id>`.

POST and PUT requests have the following request body:

```json
{
  "<entity-name>": {
    "fieldA": "A",
    "fieldB": "B"
  }
}
```

E.g., POST (create) user

```json
{
  "user": {
    "name": "Andre"
  }
}
```

E.g., PUT (update) user

```json
{
  "user": {
    "id": 1,
    "name": "André"
  }
}
```

or PUT (update) project

```json
{
  "project": {
    "id": 2,
    "userId": 1,
    "name": "Buy Xmas gifts"
  }
}
```

The endpoints will be exposed over the web and accessed by our React frontend. At TODOify, security is very important, so please ensure that all access is authenticated.

Your tasks:

- Get familiar with the current db.js mock database. No changes are needed to that file.
- Inspect the current code in index.js. Do a sanity check over the auth middleware. Maybe we missed something! Feel free to change existing code in index.js.
- Next create the following REST API endpoints:

  - GET /users - get all users
  - GET /users/:id - get one user
  - POST /users - create a new user
  - PUT /users/:id - update a user
  - DELETE /users/:id - delete a user

  - GET /projects - get all projects
  - GET /projects/:id - get one project
  - POST /projects - create a new project
  - PUT /projects/:id - update a project
  - DELETE /projects/:id - delete a project

  - GET /tasks - get all tasks
  - GET /tasks/:id - get one task
  - POST /tasks - create a new task
  - PUT /tasks/:id - update a task
  - DELETE /tasks/:id - delete a task
