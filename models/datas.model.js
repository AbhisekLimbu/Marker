const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    id: {
        type: Int16Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    
});


const localstory = dataSchema.mode('localstory', dataSchema);

module.exports  = localstory;
