"use strict";

const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".boton__btn");

nav.addEventListener("click", (e) => {
  nav.classList.toggle("boton__btn--open");
  menu.classList.toggle("header__menu--activo");
});
