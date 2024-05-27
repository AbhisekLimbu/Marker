const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
