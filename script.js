'use strict';

let menuIcon = document.querySelector('.menu__icon');
let brandDark = document.querySelector('.brand-dark');
let closeMenu = document.querySelector('.menu-close');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
};

menuIcon.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);