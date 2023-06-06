console.log("Hello");
document.getElementById("rate").addEventListener("click", async function(){
    const rating = document.getElementById("rating").value
    const reviewText= document.getElementById("message").value
    const movieTitle= document.getElementById("message").dataset.title
    const userName = document.getElementById("message").dataset.user
    const newReview = {rating, movieTitle, userName, reviewText}
  
    if (reviewText) {
        try {
            const res = await fetch ("/")
        } catch (error) {
            
        }  console.log(reviewText, rating);
    }
})