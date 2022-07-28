/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции проекты -- Начало --
// Projects slider -- Start --

const initProjectsSlider = () => {
  let swiper07 = document.querySelector('.swiper--07');
  if (swiper07) {
    swiper07 = new Swiper(swiper07, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 30,
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
      navigation: {
        nextEl: '.projects__slider-btn--next',
        prevEl: '.projects__slider-btn--prev',
      },
      pagination: {
        el: '.projects__slider-pag',
        type: 'fraction',
      },
    });
    const nextBtn = swiper07.el.closest('.projects__cols').querySelector('.next-title__subtitle');
    nextBtn.textContent = swiper07.el.querySelector('.swiper-slide-next .projects__slider-item-subtitle').textContent;
    swiper07.on('slideChangeTransitionEnd', () => {
      if (swiper07.activeIndex + 1 === swiper07.slides.length) {
        nextBtn.textContent = '';
      } else {
        nextBtn.textContent = swiper07.el.querySelector('.swiper-slide-next .projects__slider-item-subtitle').textContent;
      }
    });
  }
};

export {initProjectsSlider};
// Слайдер в секции проекты -- Конец --
// Projects slider -- Finish --
