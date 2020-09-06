const scrollDownBtn = document.querySelector('.hero__scroll'),
    hero = document.querySelector('.hero');

scrollDownBtn.addEventListener('click', () => {
    scrollTo(0, hero.clientHeight);
});