const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.api-ninjas.com/v1/quotes?category=business"
    ;

const apiKey ="4ABGFYmxxoYFk3yb8SAvRA==QlHzlw0nAG3emHwc"


function getQuote() {
    console.log("clicked");

}

quote.addEventListener("click", getQuote)