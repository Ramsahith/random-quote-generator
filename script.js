const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

//random quote function
function randomQuote(){
    quoteBtn.classList.add("Loading")
    quoteBtn.innerText = "Loading Quote...";
    //fetching random quotes/data from API and parsing it into javascript object
    fetch("http://api.quotable.io/random").then(res =>res.json()).then(result =>{
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading")
    });
}

soundBtn.addEventListener("click",()=>{
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${ quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak method of speechSynthesis speaks the utterance
})
copyBtn.addEventListener("click",()=>{
    //copiying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank"); //opening a new twitter tab with passing quote in url
})
quoteBtn.addEventListener("click",randomQuote);