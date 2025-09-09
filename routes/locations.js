const express = require('express');

const router = express.Router();

const location = require('../models/location');

//GET: List all locations
router.get('/', async (req, res) => {
    try {
        const locations = await location.find();
        res.status(200).json(locations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//POST: Create a new Location
router.post('/new', async (req, res) => {
    const newLocation = new location({
        id: req.body.id,
        name: req.body.name
    });
    try {
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//PUT: Update a Location By ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedLocation = await location.findByIdAndUpdate(
            id,
            {
                name: req.body.name
            },
            { new: true }
        );
        res.status(200).json(updatedLocation);
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
});


