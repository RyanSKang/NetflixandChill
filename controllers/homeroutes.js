// Adding Dependencies
const router = require('express').Router();
const fetch = require('node-fetch');
const {getMovieResults} = require('../utils/getMovieResults');

// Fetching the API using try and catch() for GET Route

router.get('/', (req, res) => {
    try {
        getMovieResults('avengers').then(data =>{
            console.log(data);
            res.render('homepage', {
                data,
                // logged_in: req.session.logged_in
            })
        })
    }
    catch (err) {
        res.status(500).json(err);
}
});

router.get('/movie/:keyword', (req, res) => {
    try {
        getMovieResults(req.params.keyword).then(data =>{
            console.log(data);
            res.render('homepage', {
                data
                // logged_in: req.session.logged_in
            })    
        })
    }
    catch (err) {
        res.status(500).json(err);
}
});

router.get('/synapsis/:movie', async (req, res) => {
    try {
        async function getSynapsis(title, year) {

            const URL = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=72db57ad`;

            const response = await fetch(`${URL}`);
            const data = await response.json();
            console.log(data)
            res.render('synapsis', {
                // the data will be sent into the synapsis.handlebars
                ...data,
                // logged_in: req.session.logged_in
            });
        };
        // console.log(data)
        getSynapsis(req.params.movie);

    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
  });

// GET route for displaying the reviews page
router.get('/reviews', (req, res) => {
    res.render('reviews');
    
  });

module.exports = router;
