const db = require('../models');
const Task = db.Task;

// Create a new task
exports.createTask = async (req, res) => {
  try {
    // Validate request
    if (!req.body.title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    // Create task
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      status: req.body.status || 'pending',
      tags: req.body.tags,
      userId: req.userId // From auth middleware
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Some error occurred while creating the task.' });
  }
};

// Get all tasks for a user
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.userId },
      order: [['dueDate', 'ASC'], ['priority', 'DESC']]
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Some error occurred while retrieving tasks.' });
  }
};

// Get a single task by id
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error retrieving task' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (updated[0] === 0) {
      return res.status(404).json({ message: 'Task not found or you are not authorized to update it' });
    }

    // Get the updated task
    const updatedTask = await Task.findByPk(req.params.id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error updating task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Task not found or you are not authorized to delete it' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error deleting task' });
  }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  try {
    if (!req.body.status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const updated = await Task.update(
      { status: req.body.status },
      {
        where: {
          id: req.params.id,
          userId: req.userId
        }
      }
    );

    if (updated[0] === 0) {
      return res.status(404).json({ message: 'Task not found or you are not authorized to update it' });
    }

    // Get the updated task
    const updatedTask = await Task.findByPk(req.params.id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error updating task status' });
  }
};