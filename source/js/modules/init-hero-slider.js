/* eslint-disable no-undef */
// Слайдер в секции Hero на главной -- Начало --
// Hero slider -- Start --

const initHeroSlider = () => {
  let swiper01 = document.querySelector('.swiper--01');
  if (swiper01) {
    swiper01 = new Swiper('.swiper--01', {
      watchOverflow: true,
      loop: true,
      autoplay: true,
      speed: 800,
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 10,
      lazy: false,
      pagination: {
        el: '.hero__slider-pag',
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

export {initHeroSlider};
// Слайдер в секции Hero на главной -- Конец --
// Hero slider -- Finish --
