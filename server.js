const express = require("express");
const { db } = require("./db");

const app = express();

app.use(express.json());

app.use(async function (req, res, next) {
  // example request: GET http://our-api.com?tokenId=123
  const tokenId = req.query.tokenId;
  console.log(req.query);
  if (!tokenId) {
    console.log("no tokenId in the request");
    return res.status(401).send("Permission denied");
  }
  const token = await db.getToken(tokenId);
  if (!token) {
    return res.status(401).send("Permission denied");
  }
  req.userId = token.userId;
  console.log(req.userId);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/projects", async (req, res) => {
  const userId = req.userId;
  const projects = await db.getProjects();
  const userProjects = projects.filter((p) => p.userId === userId);
  res.json(userProjects);
});

// GET project by id
app.get("/projects/:id", async (req, res) => {
  const projectId = Number.parseInt(req.params.id);
  const project = await db.getProject(projectId);
  project
    ? res.json(project)
    : res.status(404).send(`No data for project id: ${projectId}`);
});

// POST add a project

/**

curl -d '{ "project": { "title": "Learn express.js", userId: 1 } }' -H 'Content-Type: application/json' https://honorable-surf-principal.glitch.me/users?tokenId=xnmiaDqa6w

**/

app.post("/projects", async (req, res) => {
  // MOST IMPORTANT THING TO DO IN AN API ENDPOINT IS TO VALIDATE USER INPUT
  const currentUserId = req.userId;
  await db.createProject(req.body.project);
  const projects = await db.getProjects();
  const newProject = projects[projects.length() - 1];
  res.send(201).json(`New project added! ${newProject}`);
});

// Get all Users
app.get("/users", async (req, res) => {
  const users = await db.getUsers();
  console.log(users);
  res.json(users);
});

// Get User by id 💯
app.get("/users/:id", async (req, res) => {
  const userByID = parseInt(req.params.id);
  const queryUserID = await db.getUser(userByID);
  queryUserID
    ? res.json(queryUserID)
    : res.status(404).send(`Not User Found by the id: ${userByID}`);
});

// Put Update User

// POST (create) user jindacz

/**

curl -d '{ "user": { "name": "André" } }' -H 'Content-Type: application/json' https://honorable-surf-principal.glitch.me/users?tokenId=xnmiaDqa6w

**/
app.post("/users", async (req, res) => {
  const user = req.body.user;
  await db.createUser(user);
  res.sendStatus(201);
});

app.listen(8080, () => {
  console.log("Server started");
});
