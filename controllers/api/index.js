const router = require('express').Router();
const movieRoutes = require('./movieRoutes');
const homeRoutes= require('../homeroutes');
const reviewRoutes= require('./reviews');

router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);
router.use('/reviews', reviewRoutes);
module.exports = router;