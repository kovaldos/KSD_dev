/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Направления -- Начало --
// Directions slider -- Start --

const initDirectionsSlider = () => {
  let swiper02 = document.querySelector('.swiper--02');
  if (swiper02) {
    swiper02 = new Swiper(swiper02, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      effect: 'cards',
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
        nextEl: '.custom__slider-btn-next',
        prevEl: '.custom__slider-btn-prev',
      },
      pagination: {
        el: '.custom-pagination',
        type: 'fraction',
      },
    });
  }
};

export {initDirectionsSlider};
// Слайдер в секции Направления -- Конец --
// Directions slider -- Finish --
