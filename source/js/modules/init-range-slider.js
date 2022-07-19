/* eslint-disable no-invalid-this */
// Range slider on rent-catalog filter -- Start --
import noUiSlider from 'nouislider';

const initRangeSlider = () => {
  let priceRange = document.getElementById('noui-1');

  if (priceRange) {

    const input0 = document.getElementById('price-from');
    const input1 = document.getElementById('price-to');
    const inputs = [input0, input1];

    noUiSlider.create(priceRange, {
      start: [35000, 55000],
      connect: true,
      range: {
        'min': 30000,
        'max': 60000,
      },
    });

    priceRange.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });
    input0.addEventListener('change', function () {
      priceRange.noUiSlider.set([this.value, null]);
    });
    input1.addEventListener('change', function () {
      priceRange.noUiSlider.set([null, this.value]);
    });
  }
};
export {initRangeSlider};
// Range slider on rent-catalog filter -- End --
