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

module.exports = router;
