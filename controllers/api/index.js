const router = require('express').Router();
const movieRoutes = require('./movieRoutes');
const homeRoutes= require('../homeroutes');
const review= require('./reviews')
const favorite= require('./favorites')
router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);
router.use('/reviews', review);
router.use('/favorites', favorite);
module.exports = router;