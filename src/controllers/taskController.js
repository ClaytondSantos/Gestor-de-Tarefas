const TaskModel = require("../models/taskModel");

exports.list = async (req,res) => {
  try{
  const task = await TaskModel.listTasks();
  res.json(task);
  }catch(error){
    console.error(error)
    res.status(500).json({message: "Error getting the taks"});
  }
};
exports.create = async (req,res) => {
  try {
    const newtask = await TaskModel.createTask(req.body);
    res.status(201).json(newtask);
  } catch (error) {
    res.status(500).json({error: "Error creating a task"});
  }
};

exports.update = async (req,res) =>{
  try{
    const taskupdated = await TaskModel.updateTask(req.params.id, req.body);
    if (!taskupdated)
      return res.status(404).json({message: "Task not founded"});
    res.json(taskupdated);
  }catch{
    res.status(500).json({message: "Error updating task"});
  }
};
exports.delete = async (req,res) => {
  try {
    const taskdeleted = await TaskModel.deleteTask(req.params.id);
    if(!taskdeleted)
      return res.status(404).json({message: "Task not founded"});
    res.status(200).json({message: "Task deleted successfully"});    
  } catch (error) {
    res.status(500).json({message: "Error deleting task"});
  }
};
