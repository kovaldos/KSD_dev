/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initEcologySlider = () => {
  let ecologySlider = document.querySelector('.ecology__slider');
  if (ecologySlider) {
    ecologySlider = new Swiper(ecologySlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
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
          slidesPerView: 2.5,
          spaceBetween: 20,
          grid: {
            rows: 1,
          },
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
      pagination: {
        el: '.ecology__slider-pag',
        type: 'bullets',
      },
    });
  }
};

export {initEcologySlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
