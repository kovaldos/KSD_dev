/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initDirectionsSlider = () => {
  const swiper02 = new Swiper('.swiper--02', {
    watchOverflow: true,
    loop: false,
    speed: 800,
    effect: 'cards',
    grabCursor: true,
    slidesPerView: 1,
    //  breakpoints: {
    //    425: {
    //      spaceBetween: 20,
    //    },
    //    768: {
    //      loop: true,
    //      slidesPerView: 1.7,
    //      spaceBetween: 40,
    //    },
    //    1024: {
    //      loop: true,
    //      slidesPerView: 1.745,
    //      spaceBetween: 60,
    //      initialSlide: 1,
    //    },
    //    1600: {
    //      loop: true,
    //      slidesPerView: 2,
    //      spaceBetween: 60,
    //      initialSlide: 1,
    //    },
    //  },
    navigation: {
      nextEl: '.directions__slider-btn--next',
      prevEl: '.directions__slider-btn--prev',
    },
    pagination: {
      el: '.directions__slider-pag',
      type: 'fraction',
    },
  });
};

export {initDirectionsSlider};

// Hero-slider init -- Finish --
