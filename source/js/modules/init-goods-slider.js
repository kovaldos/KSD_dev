/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initGoodsSlider = () => {
  let goodsSliders = document.querySelectorAll('.goods__slider');
  if (goodsSliders) {
    goodsSliders.forEach((goodsSlider) => {
      goodsSlider = new Swiper(goodsSlider, {
        watchOverflow: true,
        speed: 800,
        slidesPerView: 1.4,
        spaceBetween: 10,
        lazy: true,
        breakpoints: {
          425: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.8,
            spaceBetween: 15,
            initialSlide: 1,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    });
  }
};

export {initGoodsSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
