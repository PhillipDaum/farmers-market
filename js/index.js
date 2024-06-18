// probably will just copy and paste the
// function from the codepen for the pop out hamburger menu
// and will type the classes into my css

const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}