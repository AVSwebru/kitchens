const showFilter = document.querySelector('.js-show-filter');
const filter = document.querySelector('.js-filter');

document.addEventListener('DOMContentLoaded', () => {
    showFilter.addEventListener('click', () => {
        filter.classList.add('isShown');
        showFilter.hidden = true;
    });
});
