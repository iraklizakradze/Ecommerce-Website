let navBar = document.getElementById('navbar-menu'),
    navOpen = document.getElementById('navbar-toggle'),
    navClose = document.getElementById('navbar-close');

function navToggle() {
    navBar.classList.toggle('show-menu');
}

if (navOpen) {
    navOpen
        .addEventListener('click', navToggle);
}

if (navClose) {
    navClose
        .addEventListener('click', navToggle);
}

/* GASP ANIMATION */

gsap.from('.main__card', 1, {opacity: 0, x: 200, delay: .1});
gsap.from('.container__img', 1, {opacity: 0, x: -400, delay: .1})
