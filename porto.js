const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbarList = document.querySelector(".navbar-list");

hamburgerIcon.addEventListener("click", () => {
  navbarList.classList.toggle("show");
});