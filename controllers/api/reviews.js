const express = require('express');
const router = express.Router();

// GET route for displaying the reviews page
router.get('/', (req, res) => {
  res.render('reviews');
});

module.exports = router;
