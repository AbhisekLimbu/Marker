const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], 
  },
}, { timestamps: true });

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
