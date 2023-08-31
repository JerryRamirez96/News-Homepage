const mainNav = document.querySelector(".main-navigation");
const primaryHeader = document.querySelector(".primary-header");
const openMenu = document.querySelector(".openbtn");
const closeMenu = document.querySelector(".closebtn");

openMenu.addEventListener("click", () => {
  document.getElementById("main-navigation-id").style.width = "65%";
  primaryHeader.toggleAttribute("data-overlay");
});

closeMenu.addEventListener("click", () => {
  document.getElementById("main-navigation-id").style.width = "0";
  primaryHeader.toggleAttribute("data-overlay");
});
