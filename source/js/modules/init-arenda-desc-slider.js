/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initArendaDescSlider = () => {
  let swiper12 = document.querySelector('.swiper--12');
  if (swiper12) {
    swiper12 = new Swiper(swiper12, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.arenda-hero-desc__slider-btn--next',
        prevEl: '.arenda-hero-desc__slider-btn--prev',
      },
      pagination: {
        el: '.arenda-hero-desc__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initArendaDescSlider};

// Hero-slider init -- Finish --
