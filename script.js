// Linking API 
// const BaseUrl ="https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";
// const Key='51a8b8f970msh294e2129279c3a5p130ec8jsna317748ab7a8'

const BaseUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=6d03d3e5"
const Key = "6d03d3e5"

const options = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": Key,
		// "X-RapidAPI-Host": 'movie-database-alternative.p.rapidapi.com'
        "X-RapidAPI-Host": 'https://www.omdbapi.com/apikey.aspx'
	}
};
// try {
// 	const response = await fetch(BaseUrl, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// Fetching the API
function getMovieResults(){

    const response= fetch(BaseUrl,options)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log (data)
    })
};

getMovieResults();
