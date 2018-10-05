const kitchens = document.querySelector('.js-kitchen-cards');

document.addEventListener('DOMContentLoaded', () => {
    kitchens.style.height = kitchens.getBoundingClientRect().height - 280 + 'px';
});