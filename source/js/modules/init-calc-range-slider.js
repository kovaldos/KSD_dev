/* eslint-disable no-invalid-this */
// Ползунок калькулятора расчета доставки -- Начало --
// Delivery calc range slider -- Start --
import noUiSlider from 'nouislider';

const initCalcRangeSlider = () => {
  let calcRange1 = document.getElementById('delivery-calc-1');
  let calcRange2 = document.getElementById('delivery-calc-2');
  if (calcRange1 && calcRange2) {
    noUiSlider.create(calcRange1, {
      start: 350,
      connect: [true, false],
      range: {
        'min': 100,
        'max': 1000,
      },
    });
    noUiSlider.create(calcRange2, {
      start: 350,
      connect: [true, false],
      range: {
        'min': 100,
        'max': 1000,
      },
    });
  }
};
export {initCalcRangeSlider};
// Ползунок калькулятора расчета доставки -- Конец --
// Delivery calc range slider -- End --
