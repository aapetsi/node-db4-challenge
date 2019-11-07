const express = require('express');
const router = express.Router();

// TEST ROUTE
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Recipes route works' });
});

// get all recipes
router.get('/', (req, res) => {
  // get all recipes
});

module.exports = router;
