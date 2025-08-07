const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        initialChicken: {
            type: Number,
            required: true
        },
        lastChicken: {
            type: Number,
            require: false
        },
        reference: {
            type: String,
            required: false
        },
        createDate: {
            type: Date,
            default: Date.now
        },
        updateDate: {
            type: Date,
            default: Date.now
        },
        paidChicken: {
            type: Number,
            required: true
        },
        owedChicken: {
            type: Number,
            required: true
        },
        collectedChicken: {
            type: Number,
            required: true
        },
        remainingChicken: {
            type: Number
        },
        history: [
            {
                quantity: {
                    type: Number,
                    required: true
                },
                paidChicken: {
                    type: Number,
                    required: true
                },
                owedChicken: {
                    type: Number,
                    required: true
                },
                collectedChicken: {
                    type: Number,
                    required: true
                },
                remainingChicken: {
                    type: Number
                },
                updateDate: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    }
);

const Customer = mongoose.model('Customer', CustomerSchema, 'pollada');

module.exports = Customer