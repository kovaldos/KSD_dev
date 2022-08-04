/* eslint-disable no-undef */
// Слайдер под секцией Hero на странице аренды -- Начало --
// Rent description slider -- Start --

const initDirectionsSupSlider = () => {
  let directionsSupSlider = document.querySelector('.directions-sup__slider');
  if (directionsSupSlider) {
    directionsSupSlider = new Swiper(directionsSupSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // 1024: {
        //   slidesPerView: 2,
        //   spaceBetween: 30,
        // },
      },
      navigation: {
        nextEl: '.directions-sup__slider-btn--next',
        prevEl: '.directions-sup__slider-btn--prev',
      },
      pagination: {
        el: '.directions-sup__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initDirectionsSupSlider};
// Слайдер под секцией Hero на странице аренды -- Конец --
// Rent description slider -- Finish --
