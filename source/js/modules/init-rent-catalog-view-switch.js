// Switch view in rent-catalog -- Start --
const initRentCatalogViewSwitch = () => {
  const catalogWrap = document.querySelector('.rent-catalog');
  if (catalogWrap) {
    const btnStripes = catalogWrap.querySelector('.rent-catalog__nav-btn--stripes');
    const btnSquares = catalogWrap.querySelector('.rent-catalog__nav-btn--squares');
    const cardsWrapper = catalogWrap.querySelector('.rent-catalog__cards');
    catalogWrap.addEventListener('click', (e) => {
      let target = e.target;
      if (target === btnSquares) {
        btnStripes.classList.remove('is-active');
        btnSquares.classList.add('is-active');
        cardsWrapper.classList.remove('rent-catalog__cards--rows');
        cardsWrapper.classList.add('rent-catalog__cards--grid');
      }
      if (target === btnStripes) {
        btnSquares.classList.remove('is-active');
        btnStripes.classList.add('is-active');
        cardsWrapper.classList.remove('rent-catalog__cards--grid');
        cardsWrapper.classList.add('rent-catalog__cards--rows');
      }
    });
  }
};
export {initRentCatalogViewSwitch};
// Switch view in rent-catalog -- End --
