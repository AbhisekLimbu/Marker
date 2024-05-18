const express = require('express');
const router = express.Router();
const localstory = require('./models/datas.model.js');

router.post('/', async (req, res) => {
    try {
        const story = await localstory.create(req.body);
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
