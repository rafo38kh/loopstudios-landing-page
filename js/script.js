const menu = document.querySelector(".js-menu");
const hamburger = document.querySelector(".js-button");
const bar = document.querySelector(".js-bar");
const img = document.querySelector(".js-img");
const menuFooter = document.querySelector(".js-menu-footer");

let isActive = false;

hamburger.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    menu.classList.add("menu__active");
    bar.style.position = "fixed";
    img.src = "images/icon-close.svg";
    menuFooter.style.display = "none";
  } else {
    isActive = false;
    menu.classList.remove("menu__active");
    bar.style.position = "absolute";
    img.src = "images/icon-hamburger.svg";
    menuFooter.style.display = "flex";
  }
});
