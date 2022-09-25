/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в карточке товара каталога техники -- Начало --
// Vehicle-card -- Start --

const initVehicleCardSlider = () => {
  let vehicleCardSliderThumbs = document.querySelector('.vehicle-card__slider-thumbs');
  if (vehicleCardSliderThumbs) {
    vehicleCardSliderThumbs = new Swiper(vehicleCardSliderThumbs, {
      spaceBetween: 15,
      slidesPerView: 3.84,
      freeMode: true,
      watchSlidesProgress: true,
      observeParents: true,
      observer: true,
      breakpoints: {
        1024: {
          spaceBetween: 30,
        },
      },
    });
  }
  let vehicleCardSlider = document.querySelector('.vehicle-card__slider');
  if (vehicleCardSlider) {
    vehicleCardSlider = new Swiper(vehicleCardSlider, {
      spaceBetween: 10,
      slidesPerView: 1,
      observeParents: true,
      observer: true,
      thumbs: {
        swiper: vehicleCardSliderThumbs,
      },
      navigation: {
        prevEl: '.vehicle-card__slider-btn--prev',
        nextEl: '.vehicle-card__slider-btn--next',
      },
    });
  }
};

export {initVehicleCardSlider};
// Слайдер в карточке товара каталога техники -- Конец --
// Vehicle-card slider -- Finish --

