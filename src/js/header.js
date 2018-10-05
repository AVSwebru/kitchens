const headerContainer = document.querySelector('.js-header-container');
const headerNav = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.header__menu-btn'); 
const headerMenu = document.querySelector('.header__menu'); 

document.addEventListener('DOMContentLoaded', () => {

    headerContainer.classList.remove('uk-container');

    headerMenu.appendChild(headerNav);

    menuBtn.addEventListener('click', () => {
        headerMenu.classList.toggle('isOpened');
        menuBtn.classList.toggle('isOpened');
    });

});
