// Testing if Javascript is working
// console.log("Hello World");

// Make Navigation Work
const btnNavEL = document.querySelector(".btn-mobil-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Sticky Navigation
const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
