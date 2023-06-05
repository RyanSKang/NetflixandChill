const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: {username: req.body.username} });
        if (!userData){
            res.status(404).json({message: 'Login failed. Please try again!' });
            return;
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );
        if (!validpassword) {
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
        }
        res.status(200).json({ message: 'Welcome!'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;