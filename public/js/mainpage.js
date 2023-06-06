
// Defining variables for search bar
let searchBtn = $('.searchBtn');
let searchBar = $('.searchBar');
let movieVal = document.getElementById('movie_Input');
let form=$('#form');
let resultsGrid = $('.searchGrid');
let searchHistArr = [];

// 1. Define search value from user interaction 
// 2. save search value and save it into local storage within the array

function submitSearch(){
    let searchTerm=movieVal.value;
    console.log(searchTerm);
// 3. use search value into getMovieResults() in our homeroutes.js
    getMovieResults(searchTerm);
};

searchBtn.on('click', function(event){
        event.preventDefault();
        var valObj= {
            Title: movieVal.value
        }
        window.location.href= `/movie/${movieVal.value}`;
});






