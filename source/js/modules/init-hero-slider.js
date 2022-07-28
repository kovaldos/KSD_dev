/* eslint-disable no-undef */
// Слайдер в секции Hero на главной -- Начало --
// Hero slider -- Start --

const initHeroSlider = () => {
  let swiper01 = document.querySelector('.swiper--01');
  if (swiper01) {
    swiper01 = new Swiper('.swiper--01', {
      watchOverflow: true,
      loop: true,
      autoplay: true,
      speed: 800,
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 10,
      //  breakpoints: {

      //  },
      pagination: {
        el: '.hero__slider-pag',
        type: 'bullets',
      },
    });
  }
};

export {initHeroSlider};
// Слайдер в секции Hero на главной -- Конец --
// Hero slider -- Finish --
