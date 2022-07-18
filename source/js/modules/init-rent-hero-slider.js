/* eslint-disable no-undef */
// Hero-slider init -- Start --

const initRentHeroSlider = () => {
  let swiper11 = document.querySelector('.swiper--11');
  if (swiper11) {
    swiper11 = new Swiper(swiper11, {
      watchOverflow: true,
      loop: true,
      autoplay: true,
      speed: 800,
      // effect: 'fade',
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

      pagination: {
        el: '.rent-hero__slider-pag',
        type: 'bullets',
      },
    });
  }
};

export {initRentHeroSlider};

// Hero-slider init -- Finish --
