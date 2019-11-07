const express = require('express');
const router = express.Router();

// TEST ROUTE
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Ingredients route works' });
});

module.exports = router;
