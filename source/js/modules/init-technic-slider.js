/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Техника -- Начало --
// Technic slider -- Start --

const initTechnicSlider = () => {
  let swiper06 = document.querySelector('.swiper--06');
  if (swiper06) {
    swiper06 = new Swiper(swiper06, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,

      navigation: {
        nextEl: '.technic__slider-btn--next',
        prevEl: '.technic__slider-btn--prev',
      },
      pagination: {
        el: '.custom-pagination',
        type: 'bullets',
        dynamicBullets: false,
      },
    });

    swiper06.el.querySelector('.technic__slider-btn-text--next').textContent = swiper06.el.querySelector('.swiper-slide-next .technic__slider-name').textContent;

    swiper06.on('slideChangeTransitionEnd', () => {
      if (swiper06.activeIndex === 0) {
        swiper06.el.querySelector('.technic__slider-btn-text--prev').textContent = '';
      } else {
        swiper06.el.querySelector('.technic__slider-btn-text--prev').textContent = swiper06.el.querySelector('.swiper-slide-prev .technic__slider-name').textContent;
      }

      if (swiper06.activeIndex + 1 === swiper06.slides.length) {
        swiper06.el.querySelector('.technic__slider-btn-text--next').textContent = '';
      } else {
        swiper06.el.querySelector('.technic__slider-btn-text--next').textContent = swiper06.el.querySelector('.swiper-slide-next .technic__slider-name').textContent;
      }
    });
  }
};
export {initTechnicSlider};

// Слайдер в секции Техника -- Конец --
// Technic slider -- End --

