// Переключения вида в каталоге аренды -- Начало --
// Switch view in rent-catalog -- Start --
const initRentCatalogViewSwitch = () => {
  const catalogWrap = document.querySelector('.rent-catalog');
  if (catalogWrap) {
    const btnStripes = catalogWrap.querySelector('.rent-catalog__nav-btn--stripes');
    const btnSquares = catalogWrap.querySelector('.rent-catalog__nav-btn--squares');
    const cardsWrapper = catalogWrap.querySelector('.rent-catalog__cards');
    catalogWrap.addEventListener('click', (e) => {
      let target = e.target;
      if (catalogWrap.offsetWidth > 1023 && target === btnStripes) {
        btnStripes.classList.remove('is-active');
        btnSquares.classList.add('is-active');
        cardsWrapper.classList.add('rent-catalog__cards--grid');
        cardsWrapper.classList.remove('rent-catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth <= 1023 && target === btnStripes) {
        btnStripes.classList.toggle('is-active');
        btnSquares.classList.toggle('is-active');
        cardsWrapper.classList.add('rent-catalog__cards--grid');
        cardsWrapper.classList.remove('rent-catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth > 1023 && target === btnSquares) {
        btnSquares.classList.remove('is-active');
        btnStripes.classList.add('is-active');
        cardsWrapper.classList.remove('rent-catalog__cards--grid');
        cardsWrapper.classList.add('rent-catalog__cards--rows');
      }
      if (catalogWrap.offsetWidth <= 1023 && target === btnSquares) {
        btnSquares.classList.toggle('is-active');
        btnStripes.classList.toggle('is-active');
        cardsWrapper.classList.remove('rent-catalog__cards--grid');
        cardsWrapper.classList.add('rent-catalog__cards--rows');
      }
    });
  }
};
export {initRentCatalogViewSwitch};
// Переключения вида в каталоге аренды -- Конец --
// Switch view in rent-catalog -- End --
