const menuActive = document.querySelector('.menu-active');
const menuBtn = document.querySelector('.menu_button');
const menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);