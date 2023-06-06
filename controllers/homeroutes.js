// Adding Dependencies
const router = require('express').Router();
const fetch = require('node-fetch');
const {getMovieResults} = require('../utils/getMovieResults');


// Registering public folder to express
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));

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

            // added new API link to get the full plot of the movie
            const URL = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=6d03d3e5`;

            // const URL=`https://www.omdbapi.com/?s=${title}&page=1&apikey=6d03d3e5`;
            // added new link to get the full plot of the movie
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

module.exports = router;
