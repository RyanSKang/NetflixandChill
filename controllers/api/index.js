const router = require('express').Router();
const movieRoutes = require('./movieRoutes');

const homeRoutes= require('../homeroutes');
const reviewRoutes= require('./reviews');

router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);
router.use('/reviews', reviewRoutes);

const review= require('./reviews')
const favorite= require('./favorites')
router.use('/', homeRoutes);

router.use('/movieapi', movieRoutes);
router.use('/reviews', review);
router.use('/favorites', favorite);

const login= require('../api/login');

router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);
router.use('/login', login);


module.exports = router;