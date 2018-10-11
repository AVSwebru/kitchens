(function() {
    const btn = document.querySelector('.js-to-top');
    const footer = document.querySelector('.footer');
    const clientHeight = document.documentElement.clientHeight;

    let footerHeight,
        footerTop;

    document.addEventListener('DOMContentLoaded', () => {
        footerHeight = footer.getBoundingClientRect().height;
        footerTriggerPos = clientHeight;
        
        document.addEventListener('scroll', () => {
            footerTop = footer.getBoundingClientRect().top;
            (footerTop <= footerTriggerPos) ? btn.sticky = true : btn.sticky = false;

            if (btn.sticky) {
                btn.style.position = 'absolute';
                btn.style.bottom = footerHeight - btn.getBoundingClientRect().height / 2 + 'px';
            } else {
                btn.style = '';
            }
        
        });
    });
})();
