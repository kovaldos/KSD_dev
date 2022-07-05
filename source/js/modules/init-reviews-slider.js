/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initReviewsSlider = () => {
  let swiper10 = document.querySelector('.swiper--10');
  if (swiper10) {
    swiper10 = new Swiper(swiper10, {
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
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.reviews__slider-btn--next',
        prevEl: '.reviews__slider-btn--prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
    });
  }
};

export {initReviewsSlider};

// Hero-slider init -- Finish --
