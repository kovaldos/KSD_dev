// Переключения вида в каталоге аренды -- Начало --
// Switch view in catalog -- Start --
const initRentCatalogViewSwitch = () => {
  const catalogWrap = document.querySelector('.catalog');
  if (catalogWrap) {
    const btnStripes = catalogWrap.querySelector('.catalog__nav-btn--stripes');
    const btnSquares = catalogWrap.querySelector('.catalog__nav-btn--squares');
    const cardsWrapper = catalogWrap.querySelector('.catalog__cards');
    catalogWrap.addEventListener('click', (e) => {
      let target = e.target;
      if (catalogWrap.offsetWidth > 1023 && target === btnStripes) {
        btnStripes.classList.remove('is-active');
        btnSquares.classList.add('is-active');
        cardsWrapper.classList.add('catalog__cards--grid');
        cardsWrapper.classList.remove('catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth <= 1023 && target === btnStripes) {
        btnStripes.classList.toggle('is-active');
        btnSquares.classList.toggle('is-active');
        cardsWrapper.classList.add('catalog__cards--grid');
        cardsWrapper.classList.remove('catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth > 1023 && target === btnSquares) {
        btnSquares.classList.remove('is-active');
        btnStripes.classList.add('is-active');
        cardsWrapper.classList.remove('catalog__cards--grid');
        cardsWrapper.classList.add('catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth <= 1023 && target === btnSquares) {
        btnSquares.classList.toggle('is-active');
        btnStripes.classList.toggle('is-active');
        cardsWrapper.classList.remove('catalog__cards--grid');
        cardsWrapper.classList.add('catalog__cards--rows');
      }
    });
  }
};
export {initRentCatalogViewSwitch};
// Переключения вида в каталоге аренды -- Конец --
// Switch view in catalog -- End --
