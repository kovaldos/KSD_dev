/* eslint-disable no-undef */

// partners slider -- Start --
const initPartnersSlider = () => {
  let swiper04 = document.querySelector('.swiper--04');
  if (swiper04) {
    swiper04 = new Swiper(swiper04, {
      // Optional parameters
      loop: true,
      loopedSlides: 6,
      // autoplay: {
      //   delay: 0,
      //   disableOnInteraction: false,
      // },
      speed: 2000,
      freeMode: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
    });
  }

};
export {initPartnersSlider};

// partners slider -- End --
