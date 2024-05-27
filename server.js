const express = require('express');
const connectDB = require('./database');
const postingDB = require('./routes/postingDB');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

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

app.get('/', (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.use('/localstory', postingDB);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
