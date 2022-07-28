/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Направления -- Начало --
// Techpark slider -- Start --

const initTechparkSlider = () => {
  let swiper0201 = document.querySelector('.swiper--02-01');
  if (swiper0201) {
    swiper0201 = new Swiper(swiper0201, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      // effect: 'cards',
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
        nextEl: '.techpark__slider-btn--next',
        prevEl: '.techpark__slider-btn--prev',
      },
      pagination: {
        el: '.techpark__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initTechparkSlider};
// Слайдер в секции Направления -- Конец --
// Techpark slider -- Finish --
