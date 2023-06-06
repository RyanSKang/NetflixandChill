const fetch = require('node-fetch');

async function getMovieResults(searchTerm) {
    let limitedResults = [];
    // console.log(searchTerm)
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=72db57ad`;
    const response = await fetch(URL)
        .then(response => {return response.json() })
        .then(data => {
            // console.log('hello');
            for (i = 0; i < 10; i++) {
                limitedResults.push(data.Search[i])
            };
            // console.log(limitedResults);

            return limitedResults;
        })
        return response
};

module.exports = {getMovieResults}