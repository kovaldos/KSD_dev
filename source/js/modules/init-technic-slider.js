/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initTechnicSlider = () => {
  let swiper06 = document.querySelector('.swiper--06');
  if (swiper06) {
    swiper06 = new Swiper(swiper06, {
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
        nextEl: '.technic__slider-btn--next',
        prevEl: '.technic__slider-btn--prev',
      },
      pagination: {
        el: '.technic__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initTechnicSlider};

// Hero-slider init -- Finish --
