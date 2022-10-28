/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер с похожими проектами -- Начало --
// Similar projects slider -- Start --

const initSimilarProjectsSlider = () => {
  let swiper09 = document.querySelector('.swiper--09');
  if (swiper09) {
    swiper09 = new Swiper(swiper09, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1.25,
      spaceBetween: 10,
      breakpoints: {
        425: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.similar-projects__slider-btn--next',
        prevEl: '.similar-projects__slider-btn--prev',
      },
      pagination: {
        el: '.similar-projects__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initSimilarProjectsSlider};
// Слайдер с похожими проектами -- Конец --
// Similar projects slider -- End --
