const express = require('express');
const fetch = require('node-fetch')
const router = express.Router();

/* GET all users. */
router.get('/', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  res.send(data);
});


/* GET user by id. */
router.get('/:id', async (req, res) => {
  const reqId = req.params.id - 1;
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  res.send(data[reqId]);
});

module.exports = router;
