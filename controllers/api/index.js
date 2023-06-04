const router = require('express').Router();
const movieRoutes = require('./movieRoutes');
const homeRoutes= require('./homeroutes');

router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);

module.exports = router;