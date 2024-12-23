const btnQuote = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
//const api_url = "https://api.api-ninjas.com/v1/quotes?category=business"
;

const apiKey = "4ABGFYmxxoYFk3yb8SAvRA==QlHzlw0nAG3emHwc";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=business"

async function getQuote() {

    try {quote.innerText = "loading...";
        btnQuote.disabled = true;
        btnQuote.innerText = "Searching...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnQuote.disabled = false;
        btnQuote.innerText = "New Quote";    
 
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
        
    } catch (error) {
        quote.innerText = "Something went wrong, please try again later";
        btnQuote.disabled = false;
        btnQuote.innerText = "New Quote";
        console.log(error);
    }
}
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "---- by " + author.innerText, "Tweet Window", "width=600, height=300");
}
    

btnQuote.addEventListener("click", getQuote);