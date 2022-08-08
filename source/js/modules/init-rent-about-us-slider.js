/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции О нас -- Начало --
// About us slider -- Start --

const initRentAboutUsSlider = () => {
  let rentAboutUsTextSlider = document.querySelector('.rent-about-us__text-slider');
  if (rentAboutUsTextSlider) {
    rentAboutUsTextSlider = new Swiper(rentAboutUsTextSlider, {
      watchOverflow: true,
      slidesPerView: 1,
      enabled: false,
      autoHeight: true,
      speed: 500,
    });
  }
  let rentAboutUsSlider = document.querySelector('.rent-about-us__slider');
  if (rentAboutUsSlider) {
    rentAboutUsSlider = new Swiper(rentAboutUsSlider, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: false,
      coverflowEffect: {
        rotate: -2,
        stretch: -500,
        depth: 215,
        modifier: -1,
        slideShadows: false,
      },
      controller: {
        control: rentAboutUsTextSlider,
        by: 'slide',
      },
      //  breakpoints: {
      //  },
      navigation: {
        nextEl: '.rent-about-us__slider-btn--next',
        prevEl: '.rent-about-us__slider-btn--prev',
      },
    });
  }
};

export {initRentAboutUsSlider};
// Слайдер в секции О нас -- Конец --
// About us slider -- Finish --
