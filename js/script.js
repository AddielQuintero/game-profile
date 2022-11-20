const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.header__menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu-visible');
});
