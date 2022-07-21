/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер техника на странице проекта -- Начало --
// Project-page technic slider -- Start --

const initProjTechSlider = () => {
  let swiper08 = document.querySelector('.swiper--08');
  if (swiper08) {
    swiper08 = new Swiper(swiper08, {
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
        nextEl: '.proj-tech__slider-btn--next',
        prevEl: '.proj-tech__slider-btn--prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
    });
  }
};

export {initProjTechSlider};
// Слайдер техника на странице проекта -- Конец --
// Project-page technic slider -- Finish --
