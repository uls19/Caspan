// загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});

window.onload = function () {

  const burgerEl = document.querySelector('.header__top-lang');
  const menuEl = document.querySelector('.header__top-lang_up');
  const polEl = document.querySelector('.header__lang');
  burgerEl.addEventListener("click", function () {
      menuEl.classList.toggle('lang_show');
      polEl.classList.toggle('pol_top');
  });

  const footerYearEl = document.querySelector('.footer__year');
  let today = new Date();
  let year = today.getFullYear(); // 2024

  footerYearEl.textContent = year;

}