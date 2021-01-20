const mainNav = document.querySelector('.main-nav');
const toggleNav = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
toggleNav.classList.remove('main-nav__toggle--nojs');


toggleNav.addEventListener ('click', () => {
  if (toggleNav.classList.contains('main-nav__toggle') || mainNav.classList.contains('main-nav')) {
    toggleNav.classList.remove('main-nav__toggle');
    toggleNav.classList.add('main-nav__toggle--opened');
    mainNav.classList.remove('main-nav');
    mainNav.classList.add('main-nav--nojs');
  } else {
    toggleNav.classList.add('main-nav__toggle');
    toggleNav.classList.remove('main-nav__toggle--opened');
    mainNav.classList.add('main-nav');
    mainNav.classList.remove('main-nav--nojs');
  }
});
