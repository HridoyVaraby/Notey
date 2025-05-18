const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const verifyToken = require('../middleware/auth.middleware');

// All note routes are protected and require authentication
router.use(verifyToken);

// Create a new note
router.post('/', noteController.createNote);

// Get all notes for the authenticated user
router.get('/', noteController.getAllNotes);

// Get a specific note by id
router.get('/:id', noteController.getNoteById);

// Update a note
router.put('/:id', noteController.updateNote);

// Delete a note
router.delete('/:id', noteController.deleteNote);

module.exports = router;