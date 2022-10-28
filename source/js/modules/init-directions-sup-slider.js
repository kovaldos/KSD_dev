/* eslint-disable no-undef */
// Слайдер в секции Направления на странице Поставщикам -- Начало --
// Directions section slider on Suppliers page -- Start --

const initDirectionsSupSlider = () => {
  let directionsSupSlider = document.querySelector('.directions-sup__slider');
  if (directionsSupSlider) {
    directionsSupSlider = new Swiper(directionsSupSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.directions-sup__slider-btn--next',
        prevEl: '.directions-sup__slider-btn--prev',
      },
      pagination: {
        el: '.directions-sup__slider-pag',
        type: 'fraction',
      },
    });
  }
};

export {initDirectionsSupSlider};
// Слайдер в секции Направления на странице Поставщикам -- Конец --
// Directions section slider on Suppliers page -- End --
