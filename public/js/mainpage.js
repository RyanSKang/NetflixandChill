// Defining variables for search bar
let searchBtn = $('.searchBtn');
let searchBar = $('.searchBar');
let movieVal = $('#movieInput');
let resultsGrid = $('.searchGrid');
let searchHistArr = [];

// 1. Define search value from user interaction 
// 2. save search value and save it into local storage within the array
searchBtn.on('click', function (event) {
    event.preventDefault();
    console.log('clicked');
    searchHistArr.push(movieVal.value);
    localStorage.setItem('Title', json.parse(movieVal.value));
    // console.log(movieVal.value);
})
// 3. use search value into getMovieResults() in our homeroutes.js







