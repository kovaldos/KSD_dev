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
import {initRentHeroSlider} from './modules/init-rent-hero-slider';
import {initRentDescSlider} from './modules/init-rent-desc-slider';
import {initRentAboutUsSlider} from './modules/init-rent-about-us-slider';
import {initRentCatalogViewSwitch} from './modules/init-rent-catalog-view-switch';
import {initRangeSlider} from './modules/init-range-slider';
import {initRentCardSlider} from './modules/init-rent-card-slider';
import {initCalcRangeSlider} from './modules/init-calc-range-slider';
import {initTechparkSlider} from './modules/init-techpark-slider';
import {initHeroSectionSlider} from './modules/init-hero-section-slider';
import {initVehicleCardSlider} from './modules/init-vehicle-card-slider';
import {initVideoSlider} from './modules/init-video-slider';
import {initRecyclingItemsSlider} from './modules/init-recycling-items-slider';
import {initWeNeedSlider} from './modules/we-need-slider';
import {initWorkWithUsSlider} from './modules/init-work-with-us-slider';
import {initDirectionsSupSlider} from './modules/init-directions-sup-slider';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initBurgerMenu();
  initHeroSlider();
  initHeroSectionSlider();
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
    initRentHeroSlider();
    initRentDescSlider();
    initRentAboutUsSlider();
    initRentCatalogViewSwitch();
    initRangeSlider();
    initRentCardSlider();
    initCalcRangeSlider();
    initTechparkSlider();
    initVehicleCardSlider();
    initVideoSlider();
    initRecyclingItemsSlider();
    initWeNeedSlider();
    initWorkWithUsSlider();
    initDirectionsSupSlider();
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
