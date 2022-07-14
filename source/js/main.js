import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initBurgerMenu} from './modules/init-burger-menu';
import {initHeroSlider} from './modules/init-hero-slider';
import {initAccordions} from './modules/init-accordion';
import {initDirectionsSlider} from './modules/init-directions-slider';
import {initTabs} from './modules/init-tabs';
import {initTeamSlider} from './modules/init-team-slider';
import {initBtnToTop} from './modules/scroll-to-top';
import {initPartnersSlider} from './modules/init-partners-slider';
import {initTechSlider} from './modules/init-tech-slider';
import {initVideoBtn} from './modules/init-video-btn';
import {initTechnicSlider} from './modules/init-technic-slider';
import {initProjectsSlider} from './modules/init-projects-slider';
import {initProjTechSlider} from './modules/init-proj-tech-slider';
import {initSimilarProjectsSlider} from './modules/init-similar-projects-slider';
import {initReviewsSlider} from './modules/init-reviews-slider';
import {initScrollToAnchor} from './modules/scroll-to-anchor';
import {initArendaHeroSlider} from './modules/init-arenda-hero-slider';
import {initArendaDescSlider} from './modules/init-arenda-desc-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initBurgerMenu();
  initHeroSlider();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initDirectionsSlider();
    initAccordions();
    initTabs();
    initTeamSlider();
    initBtnToTop();
    initPartnersSlider();
    initTechSlider();
    initVideoBtn();
    initTechnicSlider();
    initProjectsSlider();
    initProjTechSlider();
    initSimilarProjectsSlider();
    initReviewsSlider();
    initScrollToAnchor();
    initArendaHeroSlider();
    initArendaDescSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
