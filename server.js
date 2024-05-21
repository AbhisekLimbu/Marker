const express = require('express');
const connectDB = require('./database');
const postingDB = require('./routes/postingDB');
const cors = require('cors');
const path = require('path');

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/localstory', postingDB);


app.post('/p', (req, res) => {
    res.send("hello api testing");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server is running on port', port);
});
