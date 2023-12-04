const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  document.addEventListener("astro:page-load", () => {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
    });
  });
}
