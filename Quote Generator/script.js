let quotes = [];
const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector(".quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");

function reloadQuote() {
  loading()
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (quote.text > 150) {
    quoteText.classList.add("long-quote-text");
  } else {
    quoteText.classList.remove("long-quote-text");
  }
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
  Complete()
}

function TweetQuote() {
  const url = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(url, "_blank");
}

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function Complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

async function getQuotes() {
  loading()
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    quotes = await response.json();
    reloadQuote();
  } catch (error) {
    console.error(error);
  }
}

getQuotes();
