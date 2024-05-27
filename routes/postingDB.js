const express = require('express');
const router = express.Router();
const Story = require('../models/datas.model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Function for performing database operation with retry logic
async function performDatabaseOperationWithRetry(newStory) {
  let retries = 3;
  while (retries > 0) {
    try {
      // Attempt to save the new story
      await newStory.save();
      return; // Operation succeeded, exit the loop
    } catch (error) {
      // Retry only for specific Mongoose timeout error
      if (error.name === 'MongooseError' && error.message.includes('buffering timed out')) {
        retries--;
      } else {
        // Rethrow other errors
        throw error;
      }
    }
  }
  throw new Error('Database operation failed after multiple retries');
}

router.post('/', upload.single('image'), async (req, res) => {
  console.log('POST /localstory hit');
  console.log('Request body:', req.body);
  console.log('Uploaded file:', req.file);
  console.log('Location data:', req.body.location); // Logging location data

  try {
    const { title, content, location } = req.body;
    if (!title || !content || !location) {
      return res.status(400).json({ message: 'Title, content, and location are required.' });
    }

    // Check if location is a valid string
    if (typeof location !== 'string') {
      return res.status(400).json({ message: 'Location must be a string.' });
    }

    const image = req.file ? req.file.path : null;

    const newStory = new Story({
      image,
      title,
      location,
      content,
    });

    // Call the function with retry logic
    await performDatabaseOperationWithRetry(newStory);

    res.status(200).json(newStory);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to save story.' }); // Improving error message
  }
});

module.exports = router;
