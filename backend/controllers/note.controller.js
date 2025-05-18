const db = require('../models');
const Note = db.Note;

// Create a new note
exports.createNote = async (req, res) => {
  try {
    // Validate request
    if (!req.body.title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    // Create note
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
      color: req.body.color,
      tags: req.body.tags,
      userId: req.userId // From auth middleware
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Some error occurred while creating the note.' });
  }
};

// Get all notes for a user
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({
      where: { userId: req.userId },
      order: [['updatedAt', 'DESC']]
    });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Some error occurred while retrieving notes.' });
  }
};

// Get a single note by id
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error retrieving note' });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const updated = await Note.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (updated[0] === 0) {
      return res.status(404).json({ message: 'Note not found or you are not authorized to update it' });
    }

    // Get the updated note
    const updatedNote = await Note.findByPk(req.params.id);
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error updating note' });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const deleted = await Note.destroy({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Note not found or you are not authorized to delete it' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error deleting note' });
  }
};