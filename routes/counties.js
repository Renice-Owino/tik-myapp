const express = require('express');
const db = require('../config/db.config.js');

const router = express.Router();
const Counties = db.counties;


// Retrieve all Counties
router.get('/', (req, res, next) => {
    Counties.findAll().then(users => {
        res.setHeader("Content-Type", "text/json");
        res.status(200).json(users);
      });
});

// Create a new Counties
router.post('/', (req, res) => {
    Counties.create(req.body).then(customer => {
        // Send created customer to client
        res.json(customer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
});


// Retrieve a County by Id
router.get('/:id', (req, res) => {
    res.send('Retrieve a County by Id')
});

// // Update a County with Id
router.put('/:id', (req, res) => {
    res.send('Update a County by Id')
});

// // Delete a Customer with Id
router.delete('/:id', (req, res) => {
    res.send('Delete a County by Id')
});


module.exports = router;