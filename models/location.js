const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true            

        },
        name: {
            type: String,
            required: true
        }        
    }
);

const Location = mongoose.model('Location', LocationSchema); 

module.exports = Location;

