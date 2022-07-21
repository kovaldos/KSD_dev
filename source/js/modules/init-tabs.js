// Инициализация табов -- Начало --
// Tabs init -- Start --
import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabs, tabs};
// Инициализация табов -- Конец --
// Tabs init -- End --
