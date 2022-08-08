/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initRentCardSimilarSlider = () => {
  let rentCardSimilarSlider = document.querySelector('.rent-card-similar__slider');
  if (rentCardSimilarSlider) {
    rentCardSimilarSlider = new Swiper(rentCardSimilarSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1.4,
      spaceBetween: 10,
      lazy: true,
      breakpoints: {
        425: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
          initialSlide: 1,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.rent-card-similar__slider-btn--next',
        prevEl: '.rent-card-similar__slider-btn--prev',
      },
      pagination: {
        el: '.rent-card-similar__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initRentCardSimilarSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
