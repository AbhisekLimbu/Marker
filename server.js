const express = require('express');
const connectDB = require('./database');
const storingdata = require('./routes/postingDB');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();

connectDB();

// Apply CORS middleware


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../c;oemt/build')));
app.use('/localstory', storingdata);

const port = process.env.PORT || 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('helloworld');
});

app.listen(port, () => {
    console.log('server is running');
});
