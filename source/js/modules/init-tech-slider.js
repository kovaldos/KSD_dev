/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Технологии -- Начало --
// Technology slider -- Start --

const initTechSlider = () => {
  let techSlider = document.querySelector('.tech__slider');
  if (techSlider) {
    techSlider = new Swiper(techSlider, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
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
