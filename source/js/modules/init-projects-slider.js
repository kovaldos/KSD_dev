/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции проекты -- Начало --
// Projects slider -- Start --

const initProjectsSlider = () => {
  let projectSlider = document.querySelector('.projects__slider');
  if (projectSlider) {
    projectSlider = new Swiper(projectSlider, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 30,
      //  breakpoints: {
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
    const nextBtn = projectSlider.el.closest('.projects__cols').querySelector('.projects__slider-item-next');
    const nextBtnNextProject = nextBtn.querySelector('.next-title__subtitle');
    nextBtnNextProject.textContent = projectSlider.el.querySelector('.swiper-slide-next .projects__slider-item-subtitle').textContent;
    projectSlider.on('slideChangeTransitionEnd', () => {
      if (projectSlider.activeIndex + 1 === projectSlider.slides.length) {
        nextBtnNextProject.textContent = '';
        nextBtn.href = '#';
      } else {
        nextBtnNextProject.textContent = projectSlider.el.querySelector('.swiper-slide-next .projects__slider-item-subtitle').textContent;
        nextBtn.href = projectSlider.el.querySelector('.swiper-slide-next .die-link-btn').href;
      }
    });
  }
};

export {initProjectsSlider};
// Слайдер в секции проекты -- Конец --
// Projects slider -- Finish --
