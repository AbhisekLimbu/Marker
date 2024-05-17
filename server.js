const express = require('express');
const connectDB = require('./database');
const cors = require('cors');

const app = express();

connectDB();

// Apply CORS middleware
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("hello word");
});

app.listen(port, () => {
    console.log('server is running');
});
