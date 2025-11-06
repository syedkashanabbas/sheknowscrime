// JavaScript for the menu toggle on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
