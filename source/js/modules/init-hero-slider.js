/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initHeroSlider = () => {
  const swiper01 = new Swiper('.hero__slider', {
    watchOverflow: true,
    loop: true,
    autoplay: true,
    speed: 800,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 10,
   //  breakpoints: {
   //    425: {
   //      spaceBetween: 20,
   //    },
   //    768: {
   //      loop: true,
   //      slidesPerView: 1.7,
   //      spaceBetween: 40,
   //    },
   //    1024: {
   //      loop: true,
   //      slidesPerView: 1.745,
   //      spaceBetween: 60,
   //      initialSlide: 1,
   //    },
   //    1600: {
   //      loop: true,
   //      slidesPerView: 2,
   //      spaceBetween: 60,
   //      initialSlide: 1,
   //    },
   //  },
   //  navigation: {
   //    nextEl: '.destinations__slider-nav--next',
   //    prevEl: '.destinations__slider-nav--prev',
   //  },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
};

export {initHeroSlider};

// Hero-slider init -- Finish --
