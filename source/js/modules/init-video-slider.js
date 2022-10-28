/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initVideoSlider = () => {
  let videoSlider = document.querySelector('.video__slider');
  if (videoSlider) {
    videoSlider = new Swiper(videoSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      // lazy: true,
      breakpoints: {
        425: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.video__slider-btn--next',
        prevEl: '.video__slider-btn--prev',
      },
      pagination: {
        el: '.video__slider-pag',
        type: 'bullets',
      },
    });
  }
};

export {initVideoSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
