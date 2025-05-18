const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const verifyToken = require('../middleware/auth.middleware');

// All task routes are protected and require authentication
router.use(verifyToken);

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks for the authenticated user
router.get('/', taskController.getAllTasks);

// Get a specific task by id
router.get('/:id', taskController.getTaskById);

// Update a task
router.put('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

// Update task status
router.patch('/:id/status', taskController.updateTaskStatus);

module.exports = router;