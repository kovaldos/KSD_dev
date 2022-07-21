/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции О нас -- Начало --
// About us slider -- Start --

const initRentAboutUsSlider = () => {
  let swiper13 = document.querySelector('.swiper--13');
  if (swiper13) {
    swiper13 = new Swiper(swiper13, {
      watchOverflow: true,
      loop: false,
      effect: 'cards',
      cardsEffect: {
        rotate: false,
        slideShadows: false,
      },
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
        nextEl: '.rent-about-us__slider-btn--next',
        prevEl: '.rent-about-us__slider-btn--prev',
      },
      // pagination: {
      //   el: '.rent-about-us__slider-pag',
      //   type: 'fraction',
      // },
    });
  }
};

export {initRentAboutUsSlider};
// Слайдер в секции О нас -- Конец --
// About us slider -- Finish --
