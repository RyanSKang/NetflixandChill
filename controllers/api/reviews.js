const express = require('express');
const router = express.Router();
const Review = require('../../models/Review');

// GET route for displaying the reviews page
router.get('/', (req, res) => {
  res.render('synapsis');
  
});

// POST route
router.post("/", async (req, res) => {
  try{
    let reviewData = {rating: req.body.rating, title: req.body.title, review: req.body.review}
    console.log(reviewData);
  const newReview = await Review.create(reviewData)
  res.json(newReview);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
