const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes= require('./homeroutes');
// const reviewRoutes= require ('./');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/reviews', reviewRoutes);


module.exports = router;