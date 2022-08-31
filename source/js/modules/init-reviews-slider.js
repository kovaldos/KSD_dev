/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер с отзывами -- Начало --
// Reviews slider -- Start --

const initReviewsSlider = () => {

  let reviewsSlider = document.querySelector('.reviews__slider');
  if (reviewsSlider) {
    reviewsSlider = new Swiper(reviewsSlider, {
      watchOverflow: true,
      speed: 800,
      slidesPerView: 1.2,
      spaceBetween: 10,
      zoom: {
        maxRatio: 2,
      },
      breakpoints: {
        425: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        768: {
          loop: true,
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.reviews__slider-btn--next',
        prevEl: '.reviews__slider-btn--prev',
      },
      pagination: {
        el: '.reviews__slider-pag',
      },
    });
  }
};

export {initReviewsSlider};
// Слайдер с отзывами -- Конец --
// Reviews slider -- End --
