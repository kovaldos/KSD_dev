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
