// Defining variables for search bar
let searchBtn=$('.searchBtn');
let searchBar=$('.searchBar');
let movieVal=document.getElementById('movieInput');
let resultsGrid=$('.searchGrid');
let searchList=$('.searchList');
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
    // console.log(searchTerm) 
    if(searchTerm.length > 0){
        searchList.classlist.remove('.hideSearchList');
    } else {
        searchList.classList.add('.hideSearchlist');
    }
}

// Display movie results from the API based on search Bar text input
// function displayResult(movies){

// }

searchBtn.on('click', function (event){
    event.preventDefault();
    searchHistArr.push(textVal.value);
    console.log(textVal.value)
    localStorage.setItem('movies', JSON.stringify(searchHistArr));
});


