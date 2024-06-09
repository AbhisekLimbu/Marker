const express = require('express');
const router = express.Router();
const Story = require('../models/datas.model');

// GET all stories sorted by creation date in descending order
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stories' });
  }
});

// DELETE a story by ID
router.delete('/:id', async (req, res) => {
  console.log(`Received DELETE request for story ID: ${req.params.id}`); // Add this line for logging
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    console.error('Error deleting story:', error); // Add this line for logging
    res.status(500).json({ message: 'Failed to delete story' });
  }
});

module.exports = router;
