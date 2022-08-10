/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initCardSimilarSlider = () => {
  let cardSimilarSlider = document.querySelector('.card-similar__slider');
  if (cardSimilarSlider) {
    cardSimilarSlider = new Swiper(cardSimilarSlider, {
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
        nextEl: '.card-similar__slider-btn--next',
        prevEl: '.card-similar__slider-btn--prev',
      },
      pagination: {
        el: '.card-similar__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initCardSimilarSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
