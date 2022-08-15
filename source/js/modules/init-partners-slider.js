/* eslint-disable no-undef */
// Слайдер бегущая строка с логотипами партнеров -- Начало --
// Partners slider -- Start --
const initPartnersSlider = () => {
  let swiper04 = document.querySelector('.swiper--04');
  if (swiper04) {
    swiper04 = new Swiper(swiper04, {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 2000,
      freeMode: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  }

};
export {initPartnersSlider};
// Слайдер бегущая строка с логотипами партнеров -- Начало --
// Partners slider -- End --
