const menuBar = document.querySelector(".menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-item-1");
const nav2 = document.getElementById("nav-item-2");
const nav3 = document.getElementById("nav-item-3");
const nav4 = document.getElementById("nav-item-4");
const nav5 = document.getElementById("nav-item-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav(e) {
  menuBar.classList.toggle("change");
  if (this.classList.contains("change")) {
    overlay.classList.add("overlay-show");
    navItems.forEach((navItem, index) => {
      navItem.parentElement.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`);
    });
  } else {
    overlay.classList.remove("overlay-show");
    navItems.forEach((navItem, index) => {
      navItem.parentElement.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`);
    });
  }
}

menuBar.addEventListener("click", toggleNav);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", toggleNav);
});
