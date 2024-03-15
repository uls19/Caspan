// загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});

window.onload = function () {

  /*Nav icon*/
  const burgerEl = document.querySelector('.nav-icon-btn');
  const navIcon = document.querySelector('.nav-icon');
  const menuEl = document.querySelector('.header__top-contact');

// вызываем элемент и скрываем если клик был за его пределами

  const toggleMenu = function () {
  menuEl.classList.toggle("header__top-contact_mobile");
  navIcon.classList.toggle('nav-icon_active');
  document.body.classList.toggle('no-scroll');

}

burgerEl.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menuEl || menuEl.contains(target);
  const its_btnMenu = target == burgerEl;
  const menu_is_active = menuEl.classList.contains("header__top-contact_mobile");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


  const burgerLl = document.querySelector('.header__top-lang');
  const menuLl = document.querySelector('.header__top-lang_up');
  const polEl = document.querySelector('.header__lang');
  burgerLl.addEventListener("click", function () {
    menuLl.classList.toggle('lang_show');
    polEl.classList.toggle('pol_top');
  });

  const footerYearEl = document.querySelector('.footer__year');
  let today = new Date();
  let year = today.getFullYear(); // 2024

  footerYearEl.textContent = year;

}