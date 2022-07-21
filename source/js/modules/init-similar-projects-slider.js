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
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        // 425: {
        //   spaceBetween: 20,
        // },
        // 768: {
        //   loop: true,
        //   slidesPerView: 1.7,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   loop: true,
        //   slidesPerView: 1.745,
        //   spaceBetween: 60,
        //   initialSlide: 1,
        // },
        1600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.similar-projects__slider-btn--next',
        prevEl: '.similar-projects__slider-btn--prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
    });
  }
};

export {initSimilarProjectsSlider};
// Слайдер с похожими проектами -- Конец --
// Similar projects slider -- End --
