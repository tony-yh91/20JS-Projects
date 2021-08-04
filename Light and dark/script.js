const toggleCheckbox = document.querySelector("input[type=checkbox]");
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.querySelector("nav");
const textBox = document.getElementById("text-box");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function imageMode(color) {
  image1.src = `img/undraw_feeling_proud_${color}.svg`;
  image2.src = `img/undraw_conceptual_idea_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function toggleDarkLightMode(mode) {
  mode === "dark"
    ? document.documentElement.setAttribute("data-theme", "dark")
    : document.documentElement.removeAttribute("data-theme", "dark");
  mode === "dark"
    ? toggleIcon.childNodes[3].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.childNodes[3].classList.replace("fa-moon", "fa-sun");
  mode === "dark" ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
  mode === "dark" ? localStorage.setItem("theme", "dark") : localStorage.removeItem("theme");
  toggleIcon.childNodes[1].textContent = mode === "dark" ? "Dark Mode" : "Light Mode";
  nav.style.background = mode === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.background = mode === "dark" ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
}

function toggleSwitch(e) {
  if (e.target.checked) {
    toggleDarkLightMode(DARK_THEME);
  } else {
    toggleDarkLightMode(LIGHT_THEME);
  }
}

toggleCheckbox.addEventListener("change", toggleSwitch);

const theme = localStorage.getItem("theme");

if (theme) {
  if (theme === "dark") {
    toggleCheckbox.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
