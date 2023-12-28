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
