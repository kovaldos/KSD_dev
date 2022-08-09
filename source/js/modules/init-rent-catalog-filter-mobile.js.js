// Перенос элементов на адаптиве -- Начало --
// Wrapping elements on an adaptive -- Start --
const initRentCatalogFilterMobile = () => {
  const catalog = document.querySelector('.catalog');
  if (catalog) {
    const catalogFilter = catalog.querySelector('.catalog__wrapper-col--01');
    const catalogFilterToggle = catalog.querySelector('.catalog__filter-toggle');
    const catalogFilterCancel = catalog.querySelector('.catalog__filter-cancel');
    const toggles = catalog.querySelectorAll('.custom-toggle input[type="checkbox"]');
    toggles.forEach((toggle) => {
      toggle.addEventListener('change', (e) => {
        if (e.target.checked === true) {
          showChosen(e.target);
        }
      });
    });
    const showChosen = (target) => {
      const tagsLists = catalog.querySelectorAll('.catalog__tags-list');
      let inputChecked = target;
      let tagText = inputChecked.closest('.custom-toggle').querySelector('.custom-toggle__label').textContent;
      tagsLists.forEach((tagList) => {
        tagList.insertAdjacentHTML('beforeend', `
					<li class="catalog__tags-list-item">
						<span>${tagText}</span><span class="catalog__tag-remove">🗙</span>
					</li>
				`);
        const tags = tagList.querySelectorAll('.catalog__tags-list-item');
        if (tags) {
          tags.forEach((tag) => {
            tag.addEventListener('click', (e) => {
              if (e.target === tag.querySelector('.catalog__tag-remove')) {
                cancelChosen(tag, inputChecked);
              }
            });
          });
        }
      });
    };
    const cancelChosen = (tag, input) => {
      tag.remove();
      if (tag.querySelector('span').textContent === input.closest('.custom-toggle').querySelector('.custom-toggle__label').textContent) {
        input.checked = false;
      }
    };
    catalog.addEventListener('click', (e) => {
      let target = e.target;
      if (target === catalogFilterToggle) {
        catalogFilter.classList.toggle('is-active');
        document.body.classList.toggle('scroll-lock');
      }
      if (target === catalogFilterCancel && catalogFilter.classList.contains('is-active')) {
        catalogFilter.classList.remove('is-active');
        document.body.classList.remove('scroll-lock');
      }

    });
  }
};
export {initRentCatalogFilterMobile};
// Перенос элементов на адаптиве -- Конец --
// Wrapping elements on an adaptive -- End --
