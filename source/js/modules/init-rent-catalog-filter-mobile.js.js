// Перенос элементов на адаптиве -- Начало --
// Wrapping elements on an adaptive -- Start --
const initRentCatalogFilterMobile = () => {
  const rentCatalog = document.querySelector('.rent-catalog');
  if (rentCatalog) {
    const rentCatalogFilter = rentCatalog.querySelector('.rent-catalog__wrapper-col--01');
    const rentCatalogFilterToggle = rentCatalog.querySelector('.rent-catalog__filter-toggle');
    const rentCatalogFilterCancel = rentCatalog.querySelector('.rent-catalog__filter-cancel');
    const toggles = rentCatalog.querySelectorAll('.custom-toggle input[type="checkbox"]');
    toggles.forEach((toggle) => {
      toggle.addEventListener('change', (e) => {
        if (e.target.checked === true) {
          showChosen(e.target);
        }
      });
    });
    const showChosen = (target) => {
      const tagsLists = rentCatalog.querySelectorAll('.rent-catalog__tags-list');
      let inputChecked = target;
      let tagText = inputChecked.closest('.custom-toggle').querySelector('.custom-toggle__label').textContent;
      tagsLists.forEach((tagList) => {
        tagList.insertAdjacentHTML('beforeend', `
					<li class="rent-catalog__tags-list-item">
						<span>${tagText}</span><span class="rent-catalog__tag-remove">🗙</span>
					</li>
				`);
        const tags = tagList.querySelectorAll('.rent-catalog__tags-list-item');
        if (tags) {
          tags.forEach((tag) => {
            tag.addEventListener('click', (e) => {
              if (e.target === tag.querySelector('.rent-catalog__tag-remove')) {
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
    rentCatalog.addEventListener('click', (e) => {
      let target = e.target;
      if (target === rentCatalogFilterToggle) {
        rentCatalogFilter.classList.toggle('is-active');
        document.body.classList.toggle('scroll-lock');
      }
      if (target === rentCatalogFilterCancel && rentCatalogFilter.classList.contains('is-active')) {
        rentCatalogFilter.classList.remove('is-active');
        document.body.classList.remove('scroll-lock');
      }

    });
  }
};
export {initRentCatalogFilterMobile};
// Перенос элементов на адаптиве -- Конец --
// Wrapping elements on an adaptive -- End --
