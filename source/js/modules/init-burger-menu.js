// Burger menu Start
const initBurgerMenu = () => {
  const burgerBtns = document.querySelectorAll('[data-burger-btn]');
  if (burgerBtns.length) {
    const menuBody = document.querySelector('[data-burger-body]');
    burgerBtns.forEach((burgerBtn) => {
      burgerBtn.addEventListener('click', function () {
        document.body.classList.toggle('scroll-lock');
        burgerBtn.classList.toggle('is-active');
        menuBody.classList.toggle('is-active');
      });
      menuBody.addEventListener('click', (e) => {
        if (e.target.dataset.target && menuBody.classList.contains('is-active')) {
          document.body.classList.remove('scroll-lock');
          burgerBtn.classList.remove('is-active');
          menuBody.classList.remove('is-active');
        }
      });
    });
  }
};
export {initBurgerMenu};
// Burger menu End