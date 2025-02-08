'use strict';

const close_BTN = document.querySelector('.burger-close-btn');

close_BTN.addEventListener('click', closeBurger);

function closeBurger() {
  document.querySelector('.mob-menu').classList.toggle('is-open');
}

const open_BTN = document.querySelector('.burger-open');

open_BTN.addEventListener('click', openBurger);

function openBurger() {
  document.querySelector('.mob-menu').classList.toggle('is-open');
}
