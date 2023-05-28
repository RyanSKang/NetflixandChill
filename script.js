// Fetching the API
async function getMovieResults(searchTerm){
    const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
    const res= await fetch(`${URL}`);
    const data= await res.json();
    console.log(data)
};

getMovieResults('scream');
