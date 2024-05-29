const express = require('express');
const router = express.Router();
const Story = require('../models/datas.model');

// GET all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stories' });
  }
});

// You can add more routes here as needed, e.g., POST, DELETE, etc.

module.exports = router;
