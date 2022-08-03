/* eslint-disable no-undef */
// Слайдер под секцией Hero на странице аренды -- Начало --
// Rent description slider -- Start --

const initRentDescSlider = () => {
  let heroRentDescSlider = document.querySelector('.rent-hero-desc__slider');
  if (heroRentDescSlider) {
    heroRentDescSlider = new Swiper(heroRentDescSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
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
