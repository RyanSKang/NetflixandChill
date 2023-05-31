const express = require('express');
const router = express.Router();
const { Favorite, User, Movie } = require('../models');

// Add a favorite
router.post('/', async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const favorite = await Favorite.create({ userId, movieId });
    res.json(favorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove a favorite
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id } });
    res.json({ message: 'Favorite removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's favorites
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const favorites = await Favorite.findAll({
      where: { userId },
      include: [User, Movie], // Include associated User and Movie models
    });
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
