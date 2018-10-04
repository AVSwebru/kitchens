const kitchens = document.querySelector('.js-kitchens');

document.addEventListener('DOMContentLoaded', () => {
    kitchens.style.height = kitchens.getBoundingClientRect().height - 280 + 'px';
});