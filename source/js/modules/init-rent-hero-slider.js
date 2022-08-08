/* eslint-disable no-undef */
// Слайдер в секции Hero на странице аренды -- Начало --
// Rent-hero slider -- Start --

const initRentHeroSlider = () => {
  let rentHeroSlider = document.querySelector('.rent-hero__slider');
  if (rentHeroSlider) {
    rentHeroSlider = new Swiper(rentHeroSlider, {
      watchOverflow: true,
      loop: true,
      autoplay: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      //  breakpoints: {
      //  },

      pagination: {
        el: '.rent-hero__slider-pag',
        type: 'bullets',
      },
    });
  }
};

export {initRentHeroSlider};
// Слайдер в секции Hero на странице аренды -- Конец --
// Rent-hero slider -- End --
