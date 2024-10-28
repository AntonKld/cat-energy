let navMenu = document.querySelector('.header__content');
let navToggle = document.querySelector('.header__button');

navMenu.classList.remove('main-header__wrapper--nojs');

export const initBurgerMenu = () => {
  navToggle.addEventListener('click', function () {
    if (navMenu.classList.contains('header__content--closed')) {
      navMenu.classList.remove('header__content--closed');
      navMenu.classList.add('header__content--open');
    } else {
      navMenu.classList.add('header__content--closed');
      navMenu.classList.remove('header__content--open');
    }
  });
};
