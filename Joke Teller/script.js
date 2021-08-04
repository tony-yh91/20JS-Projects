// VoiceRSS Javascript SDK
const button = document.getElementById("button");

function tellJoke(joke) {
  if ("speechSynthesis" in window) {
    let msg = new SpeechSynthesisUtterance();
    msg.text = joke;
    window.speechSynthesis.speak(msg);
    msg.addEventListener("end", () => {
      button.disabled = false;
    });
  } else {
    alert("Sorry, your browser doesn't support text to speech!");
  }
}

async function getJokes() {
  let joke = "";
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellJoke(joke);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  button.disabled = true;
  getJokes();
});
