// Подменю в шапке -- Начало --
const initSubmenu = () => {
  const headerMenu = document.querySelector('.main-nav');
  if (headerMenu) {
    const submenuToggle = headerMenu.querySelector('.main-nav__submenu-toggle');
    const submenu = headerMenu.querySelector('.main-nav__sublist');
    headerMenu.addEventListener('mouseover', (e) => {
      if (e.target === submenuToggle) {
        submenu.classList.add('is-active');
        const submenuItems = submenu.querySelectorAll('.main-nav__link');
        submenuItems.forEach((submenuItem) => {
          submenuItem.addEventListener('click', () => {
            submenu.classList.remove('is-active');
          });
        });
      }
    });
  }
};
export {initSubmenu};
// Подменю в шапке -- Конец --
