// Adding Dependencies
const router = require('express').Router();

// Fetching the API using try and catch()
router.get('/movieapi', async (req, res) => {
    try{
    async function getMovieResults(searchTerm){
    const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
    const response= await fetch(`${URL}`);
    const data= await response.json();
    res.render('homepage', {
        ...data,
        logged_in: req.session.logged_in
    });
};
    console.log(data)
    getMovieResults(req.params.movie);

} catch (err) {
    res.status(500).json(err);
}
    });
