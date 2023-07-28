const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const addTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("Get single Task");
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
