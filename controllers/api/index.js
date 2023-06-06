// Defining Routes and Requiring
const router = require('express').Router();
const reviewRoutes= require('./reviews');
const favoriteRoutes= require('./favorites')
const loginRoutes= require('./login');

// const homeRoutes= require('../homeroutes');
router.use('/reviews', reviewRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/login', loginRoutes);


module.exports = router;