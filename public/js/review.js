console.log("Hello");
let rating = document.getElementById("rating");
let reviewText = document.getElementById("message");
let movieTitle = document.getElementById("message");
let userName = document.getElementById("message")
let rate = document.getElementById("rate");
let newReview = {rating, movieTitle, userName, reviewText}

rate.addEventListener("click", function(event){
    // const rating = document.getElementById("rating").value
    // const reviewText= document.getElementById("message").value
    // const movieTitle= document.getElementById("message").dataset.title
    // const userName = document.getElementById("message").dataset.user
    event.preventDefault();
    var valObj= {
        // or should it be newReview?
        Title: reviewText.value
    }
    fetch('/api/reviews', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(valObj)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })
    console.log (reviewText, rating)
});

  
//     if (reviewText) {
//         try {
//             const res = fetch ("/")
//         } catch (error) {
            
//         }  console.log(reviewText, rating);
//     }
// })