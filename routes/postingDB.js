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

async function performDatabaseOperationWithRetry(newStory) {
  let retries = 3;
  while (retries > 0) {
    try {
      await newStory.save();
      console.log('Database operation succeeded');
      return; // Operation succeeded, exit the loop
    } catch (error) {
      console.error(`Attempt failed. Error: ${error.message}`);
      if (error.name === 'MongooseError' && error.message.includes('buffering timed out')) {
        retries--;
        console.log(`Retrying... Attempts left: ${retries}`);
        if (retries === 0) {
          console.error('All retry attempts failed');
          throw new Error('Database operation failed after multiple retries');
        }
      } else {
        console.error('Non-retryable error occurred:', error);
        throw error;
      }
    }
  }
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

    await performDatabaseOperationWithRetry(newStory);

    res.status(200).json(newStory);
  } catch (error) {
    console.error('Error during database operation:', error);
    res.status(500).json({ message: 'Failed to save story due to server error.' }); // Improving error message
  }
});

module.exports = router;
