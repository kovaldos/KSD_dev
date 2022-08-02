/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initRecyclingItemsSlider = () => {
  let recyclingItemsSlider = document.querySelector('.recycling__items');
  if (recyclingItemsSlider) {
    recyclingItemsSlider = new Swiper(recyclingItemsSlider, {
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
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
      pagination: {
        el: '.recycling__items-pag',
        type: 'bullets',
      },
    });
  }
};

export {initRecyclingItemsSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
