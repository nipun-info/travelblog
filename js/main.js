/* ===== Show menu ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ===== Remove menu Mobile ===== */
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== ADD Blur to Header ===== */
const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader)