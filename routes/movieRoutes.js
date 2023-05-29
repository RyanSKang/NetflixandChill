router.get('/synapsis/:movie', async (req, res) => {
    try {
        async function getMovieResults(searchTerm){
            const URL=`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=6d03d3e5`;
            const res= await fetch(`${URL}`);
            const data= await res.json();
            console.log(data)
            res.render('synapsis', {
                // the data will be sent into the synapsis.handlebars
        ...data,
        logged_in: req.session.logged_in
      });
    };
        
        getMovieResults(req.params.movie);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });