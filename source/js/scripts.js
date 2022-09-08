const body = document.querySelector('body');
const menu = body.querySelector('.main-nav__menu-list');
const menuButton = body.querySelector('.main-nav__menu-button');


menuButton.addEventListener('click', () => {
  menu.classList.toggle('main-nav__menu-list--open');

  if (menu.classList.contains('main-nav__menu-list--open')) {
    menuButton.setAttribute('aria-label', 'Закрыть меню сайта');
    body.style.overflow = 'hidden';
  } else {
    menuButton.setAttribute('aria-label', 'Открыть меню сайта');
    body.removeAttribute('style');
  }
});
