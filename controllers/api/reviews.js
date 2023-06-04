const express = require('express');
const router = express.Router();

// GET route for displaying the reviews page
router.get('/', (req, res) => {
  res.render('reviews', { title: 'Movie Reviews' });
});

module.exports = router;
