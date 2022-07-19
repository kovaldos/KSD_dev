// Range slider on rent-catalog filter -- Start --
import noUiSlider from 'nouislider';

const initRangeSlider = () => {
  let priceRange = document.getElementById('noui-1');
  if (priceRange) {
    noUiSlider.create(priceRange, {
      start: [10, 30],
      connect: true,
      range: {
        'min': -20,
        'max': 40,
      },
    });
  }
};
export {initRangeSlider};
// Range slider on rent-catalog filter -- End --
