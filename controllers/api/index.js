const router = require('express').Router();
const movieRoutes = require('./movieRoutes');
const homeRoutes= require('../homeroutes');
const login= require('../api/login');

router.use('/', homeRoutes);
router.use('/movieapi', movieRoutes);
router.use('/login', login);

module.exports = router;