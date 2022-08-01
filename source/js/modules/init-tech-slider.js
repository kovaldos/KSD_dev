/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Технологии -- Начало --
// Technology slider -- Start --

const initTechSlider = () => {
  let swiper05 = document.querySelector('.swiper--05');
  if (swiper05) {
    swiper05 = new Swiper(swiper05, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      //  breakpoints: {

      //  },
      navigation: {
        nextEl: '.tech__slider-btn--next',
        prevEl: '.tech__slider-btn--prev',
      },
      pagination: {
        el: '.tech__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initTechSlider};
// Слайдер в секции Технологии -- Конец --
// Technology slider -- End --
