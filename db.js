let tokens = [
  {
    id: "TPkFrQWMp8",
    userId: 1,
    validUntil: "1712300400000",
    deviceId: 1,
  },
  {
    id: "xnmiaDqa6w",
    userId: 2,
    validUntil: "1712200400000",
    deviceId: 2,
  },
  {
    id: "xNRnf1N4Hr",
    userId: 2,
    validUntil: "1641196800000",
    deviceId: 3,
  },
];

let users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];

let projects = [
  {
    id: 1,
    name: "Paint walls",
    userId: 1,
  },
  {
    id: 2,
    name: "Feed fishes",
    userId: 2,
  },
  {
    id: 3,
    name: "Study for exam",
    userId: 2,
  },
];

let tasks = [
  {
    id: 1,
    userId: 1,
    name: "Buy paint",
    projectId: 1,
  },
  {
    id: 2,
    userId: 1,
    name: "Buy brush",
    projectId: 1,
  },
  {
    id: 3,
    userId: 1,
    name: "Paint walls",
    projectId: 1,
  },
  {
    id: 4,
    userId: 2,
    name: "Go to pet store",
    projectId: 2,
  },
];

module.exports.db = {
  createUser: async (user) => {
    const lastUser = users[users.length - 1];
    const lastId = lastUser?.id || 0;
    users.push({
      ...user,
      id: lastId + 1,
    });
  },
  deleteUser: async (id) => {
    users = users.filter((u) => u.id !== id);
  },
  getUser: async (id) => {
    return users.find((u) => u.id === id);
  },
  getUsers: async () => {
    return users;
  },
  updateUser: async () => {},
  createProject: async (project) => {
    const lastProject = projects[projects.length - 1];
    const lastId = lastProject?.id || 0;
    projects.push({
      ...project,
      id: lastId + 1,
    });
  },
  deleteProject: async (id) => {
    projects = projects.filter((p) => p.id !== id);
  },
  getProject: async (id) => {
    return projects.find((p) => p.id === id);
  },
  getProjects: async () => {
    return projects;
  },
  createTask: async (task) => {
    const lastTask = tasks[tasks.length - 1];
    const lastId = lastTask?.id || 0;
    tasks.push({
      ...task,
      id: lastId + 1,
    });
  },
  deleteTask: async (id) => {
    tasks = tasks.filter((t) => t.id !== id);
  },
  getTask: async (id) => {
    return tasks.find((t) => t.id === id);
  },
  getTasks: async () => {
    return tasks;
  },
  getToken: async (id) => {
    return tokens.find((t) => t.id === id);
  },
  deleteToken: async (id) => {
    tokens = tokens.filter((t) => t.id !== id);
  },
};
