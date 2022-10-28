/* eslint-disable no-undef */
// Слайдер в секции Hero -- Начало --
// Hero slider -- Start --

const initHeroSectionSlider = () => {
  let heroSectionSlider = document.querySelector('.hero-section__slider');
  if (heroSectionSlider) {
    heroSectionSlider = new Swiper(heroSectionSlider, {
      watchOverflow: true,
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 5000,
      },
      effect: 'fade',
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      //  breakpoints: {

      //  },
      pagination: {
        clickable: true,
        el: '.hero-section__slider-pag',
        type: 'bullets',
        renderBullet(index, className) {
          return `
            <span class=${className}>
              <svg class="progress-ring" width="34" height="34">
                <circle class="progress-ring__circle" stroke="white" stroke-width="2" cx="17" cy="17" r="16" fill="currentColor"></circle>
              </svg>
            </span>
          `;
        },
      },
    });
  }
};

export {initHeroSectionSlider};
// Слайдер в секции Hero -- Конец --
// Hero slider -- Finish --
