console.log("Hello");
let rating = document.getElementById("rating");
let reviewText = document.getElementById("reviewText");
let movieTitle = document.getElementById("movieTitle");
let userName = document.getElementById("userName")
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    // let newReview = {rating: rating.value, title: movieTitle.value, review: reviewText}
    console.log(movieTitle.textContent)
    // var valObj= {
    //     // or should it be newReview?
    //     Title: reviewText.value
    // }
    fetch('/api/reviews/', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({rating:rating.value, title: movieTitle.textContent, review: reviewText.value})
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })
    window.location.reload();
});

  
