const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const response = await Task.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failed", message: error });
  }
  // res.send("Get All Tasks");
};

const addTask = async (req, res) => {
  try {
    /* using create */
    // const response = await Task.create(req.body);
    const data = new Task({
      name: req.body.name,
      completed: req.body.completed,
    });
    const response = await data.save();
    res.status(201).json({ status: "success", result: "added successfully" });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const response = await Task.findOne({ _id: req.params.id });
    if (!response) {
      return res.status(404).json({ message: `record not found` });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failed", message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const response = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!response) {
      return res.status(404).json({ message: `record not found` });
    }
    res.status(204);
  } catch (error) {
    res.status(500).json({ status: "failed", message: error });
  }
  res.send("Update Task");
};

const deleteTask = async (req, res) => {
  try {
    const response = await Task.findOneAndDelete({ _id: req.params.id });
    if (!response) {
      return res.status(404).json({ message: `record not found` });
    }
    res
      .status(200)
      .json({ status: "success", message: `deleted successfully` });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error });
  }
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
