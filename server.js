const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const connectDB = require('./database');
const postingDB = require('./routes/postingDB');
const storyRoutes = require('./routes/storyRoutes'); // Ensure this is correctly imported

const app = express();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log(`Created directory: ${uploadDir}`);
}

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// Serve static files from the React app's build directory
const buildPath = path.join(__dirname, 'client/build');
app.use(express.static(buildPath));

// Add your API routes
app.use('/localstory', postingDB);
app.use('/stories', storyRoutes); // Use storyRoutes for /stories

// Catch-all handler to serve the React app for any route not handled by the above routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(buildPath, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
