// Defining variables for search bar
let searchBtn=$('.searchBtn');
let searchBar=$('.searchBar');
let movieVal=document.getElementById('movieInput');
let resultsGrid=$('.searchGrid');
let searchHistArr=[];

// Fetching the API
async function getMovieResults(searchTerm){
    const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
    const response= await fetch(`${URL}`);
    const data= await response.json();
    console.log(data)
    // if(data.Response == "true") displayResult(data.Search);
};
getMovieResults('avengers');
// Searching movies from API based on search Bar text input
function searchMovies(){
    let searchTerm=movieVal.value.trim();
    console.log(searchTerm) 
}

// handlebar needs to make component that will fill out the necessary requirements of api data into 
// the page
// and in order to make this work i will need to route the handle bar so when search button is clicked 
// 