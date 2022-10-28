/* eslint-disable no-invalid-this */
// Фиксированный хедер -- Начало --
// Fixed header -- Start --

const initHeaderFixed = () => {
  const header = document.querySelector('.header');
  if (header) {
    const headerBottom = header.querySelector('.header__bottom');
    //  const scrollHeight = 1000;
    window.addEventListener('scroll', function () {
      if (this.scrollY > headerBottom.offsetTop) {
        header.classList.add('header--fixed');
      } else {
        header.classList.remove('header--fixed');
      }
    });
  }
};
export {initHeaderFixed};
// Фиксированный хедер -- Конец --
// Fixed header -- End --
