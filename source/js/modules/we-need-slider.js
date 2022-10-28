/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initWeNeedSlider = () => {
  let weNeedSlider = document.querySelector('.we-need__items');
  if (weNeedSlider) {
    weNeedSlider = new Swiper(weNeedSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1.2,
      spaceBetween: 15,
      grid: {
        rows: 1,
        fill: 'row',
      },
      breakpoints: {
        425: {
          slidesPerView: 1.5,
          spaceBetween: 15,
          grid: {
            rows: 1,
          },
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 1,
          },
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
      navigation: {
        prevEl: '.we-need__items-btn--prev',
        nextEl: '.we-need__items-btn--next',
      },
      pagination: {
        el: '.we-need__items-pag',
        type: 'fraction',
      },
    });
  }
};

export {initWeNeedSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
