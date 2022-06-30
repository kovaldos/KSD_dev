/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initTechSlider = () => {
  let swiper05 = document.querySelector('.swiper--05');
  if (swiper05) {
    swiper05 = new Swiper(swiper05, {
      watchOverflow: true,
      loop: false,
      speed: 800,
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

// Hero-slider init -- Finish --
