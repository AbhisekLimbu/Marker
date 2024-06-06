const express = require('express');
const router = express.Router();
const Story = require('../models/datas.model');

// DELETE a story by ID
router.delete('/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    console.error('Error deleting story:', error); // Add this line
    res.status(500).json({ message: 'Failed to delete story' });
  }
});

module.exports = router;
