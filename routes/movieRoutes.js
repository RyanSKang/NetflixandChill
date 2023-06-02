// dependencies
const router = require('express').Router();
// const {} = require('../models');
// const path = require('path');

// defining variables
// let searchBar=document.getElementById('searchBar');
// let searchBtn=document.getElementbyId('searchBtn');
// let movieVal=document.getElementById('movieInput');
// let searchHistArr=[];


// fetching the API
router.get('/synapsis/:movie', async (req, res) => {
    try {
        async function getMovieResults(title){
            const URL=`https://www.omdbapi.com/?s=${title}&page=1&apikey=6d03d3e5`;
            const res= await fetch(`${URL}`);
            const data= await res.json();
            res.render('synapsis', {
                // the data will be sent into the synapsis.handlebars
        ...data,
        logged_in: req.session.logged_in
      });
    };
          console.log(data)
        getMovieResults(req.params.movie);
        // Searching movies from API based on search Bar text input
        
        // function searchBtn(){
        //   let searchBtn=movieVal.value.trim();
        //   // console.log(title) 
        //   if(searchBtn.length > 0){
        //       searchList.classlist.remove('.hideSearchList');
        //   } else {
        //       searchList.classList.add('.hideSearchlist');
        //   }
    // } 
    }
    catch (err) {
      res.status(500).json(err);
    }
  });

  // Display movie results from the API based on search Bar text input

//   searchBtn.on('click', function (event){
//     event.preventDefault();
//     searchHistArr.push(textVal.value);
//     console.log(textVal.value)
//     localStorage.setItem('movies', JSON.stringify(searchHistArr));
// });

  module.exports = router;