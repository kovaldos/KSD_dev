/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер техника на странице проекта -- Начало --
// Project-page technic slider -- Start --

const initProjTechSlider = () => {
  let projTechSlider = document.querySelector('.proj-tech__slider');
  if (projTechSlider) {
    projTechSlider = new Swiper(projTechSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1.4,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
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
