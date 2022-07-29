/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Направления -- Начало --
// Directions slider -- Start --

const initDirectionsSlider = () => {
  let directionsTextSlider = document.querySelector('.directions__text-slider');
  if (directionsTextSlider) {
    directionsTextSlider = new Swiper(directionsTextSlider, {
      slidesPerView: 1,
      enabled: false,
    });
  }
  let directionSlider = document.querySelector('.directions__slider');
  if (directionSlider) {
    directionSlider = new Swiper(directionSlider, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      effect: 'cards',
      controller: {
        control: directionsTextSlider,
        by: 'slide',
      },
      cardsEffect: {
        rotate: false,
        slideShadows: false,
      },
      grabCursor: true,
      slidesPerView: 1,
      breakpoints: {
        425: {
          spaceBetween: 15,
        },
        768: {
        },
        1024: {
        },
        1600: {
        },
      },
      navigation: {
        nextEl: '.directions__slider-btn--next',
        prevEl: '.directions__slider-btn--prev',
      },
      pagination: {
        el: '.directions__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initDirectionsSlider};
// Слайдер в секции Направления -- Конец --
// Directions slider -- Finish --
