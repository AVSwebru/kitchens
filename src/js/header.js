(function() {
    const headerNav = document.querySelector('.header-nav');
    const menuBtn = document.querySelector('.header__menu-btn'); 
    const headerMenu = document.querySelector('.header__menu'); 
    const headerPhone = document.querySelector('.header__phone'); 

    document.addEventListener('DOMContentLoaded', () => {
        if (window.matchMedia('(max-width: 960px)').matches) {
            headerMenu.appendChild(headerNav);
            headerMenu.appendChild(headerPhone);
            menuBtn.addEventListener('click', () => {
                headerMenu.classList.toggle('isOpened');
                menuBtn.classList.toggle('isOpened');
            });
        }
    });
})();
