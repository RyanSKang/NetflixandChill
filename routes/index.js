const router = require('express').Router();
const movieRoutes = require('./movieRoutes');

router.use('/movieapi', movieRoutes);

module.exports = router;