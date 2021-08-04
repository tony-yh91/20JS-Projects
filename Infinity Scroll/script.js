const ACCESS_KEY = "FIG5RpPs0zg52_STPX_3Oyj3blEsBDXjyaPBrqw6E0E";
const count = 5;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${count}`;

const imgContainer = document.querySelector(".img-container");
const loader = document.querySelector(".spinner");

let photosArray = [];
let ready = false;
let initialLoad = true;
let totalPhotos = 0;
let fetchedPhotos = 0;

function fetchWithMoreCount(count) {
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${count}`;
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

function setReady() {
  fetchedPhotos++;
  console.log(fetchedPhotos, totalPhotos);
  if (totalPhotos === fetchedPhotos) {
    ready = true;
    loader.hidden = true;
  }
}

function displayPhotos() {
  totalPhotos = photosArray.length;
  photosArray.forEach((photo) => {
    const a = document.createElement("a");
    setAttributes(a, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", () => {
      setReady();
    });
    a.appendChild(img);
    imgContainer.appendChild(a);
  });
}

async function getPhotos() {
  try {
    let response = await fetch(apiUrl);
    photosArray = await response.json();
    fetchedPhotos = 0;
    if (initialLoad) {
      fetchWithMoreCount(30);
      initialLoad = false;
    }
    displayPhotos();
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
