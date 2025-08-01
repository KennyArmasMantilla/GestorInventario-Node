const express = require('express');

const router = express.Router();

const Customer = require('../models/customer');

//GET: List all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//GET: Get a customer by ID
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}); 


//POST: Create a new customer
router.post('/', async (req, res) => {
    const customer = new Customer({
        date: req.body.date,
        name: req.body.name
    });

    try {
        const savedCustomer = await customer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//PUT: Update a customer by ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = req.body;
        const udpateCustomer = await Customer.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: customer
            },
            {
                new: true
            }
        );
        if (!updateCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(updateCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;