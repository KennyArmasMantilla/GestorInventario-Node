const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        name: {
            type: String,
            required: true
        }        
    }
);

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer