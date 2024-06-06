const express = require('express');
const multer = require('multer');
const path = require('path');
const Story = require('../models/datas.model'); // Adjust the path as necessary

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { title, content, location } = req.body;
  const image = req.file.filename; // Save just the filename

  try {
    const newStory = new Story({ title, content, location, image });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save story' });
  }
});

module.exports = router;
