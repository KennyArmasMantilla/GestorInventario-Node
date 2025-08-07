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
router.get('/search/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await Customer.findOne({
            _id: id
        })
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//POST: Create a new customer
router.post('/new', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        lastname: req.body.lastname,
        location: req.body.location,
        phone: req.body.phone,
        quantity: req.body.quantity,
        initialChicken: req.body.initialChicken,
        lastChicken: req.body.lastChicken,
        reference: req.body.reference,
        paidChicken: req.body.paidChicken,
        owedChicken: req.body.owedChicken,
        collectedChicken: req.body.collectedChicken,
        remainingChicken: req.body.remainingChicken,
        history: req.body.history
    });

    try {
        const savedCustomer = await customer.save();
        res.status(200).json(savedCustomer);
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
        if (!udpateCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(udpateCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//DELETE: Delete a customer by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCustomer = await Customer.findOneAndDelete({
            _id: id
        });
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;