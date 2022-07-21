/* eslint-disable no-undef */
// Слайдер под секцией Hero на странице аренды -- Начало --
// Rent description slider -- Start --

const initRentDescSlider = () => {
  let swiper12 = document.querySelector('.swiper--12');
  if (swiper12) {
    swiper12 = new Swiper(swiper12, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.rent-hero-desc__slider-btn--next',
        prevEl: '.rent-hero-desc__slider-btn--prev',
      },
      pagination: {
        el: '.rent-hero-desc__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initRentDescSlider};
// Слайдер под секцией Hero на странице аренды -- Конец --
// Rent description slider -- Finish --
