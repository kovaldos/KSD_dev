/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

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

// Hero-slider init -- Finish --
