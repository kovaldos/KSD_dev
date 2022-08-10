/* eslint-disable no-console */
//  Кнопки плюс и минус -- Начало --

const initCount = () => {
  const goodsCards = document.querySelectorAll('.card');
  if (goodsCards.length > 0) {
    goodsCards.forEach((goodsCard) => {
      const counterWarning = goodsCard.querySelector('.notification');
      const input = goodsCard.querySelector('.card__counter-input input');
      goodsCard.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('card__counter-btn')) {
          initCounter(target);
        }
      });
      const initCounter = (btn) => {
        let counter = input.value;
        if (btn.classList.contains('card__counter-btn--minus')) {
          if (counter > 0) {
            setTimeout(() => {
              counter--;
              input.value = counter;
            }, 200);
          } else {
            if (counterWarning) {
              counterWarning.classList.add('is-active');
              setTimeout(() => {
                counterWarning.classList.remove('is-active');
              }, 3000);
              console.error('Не может быть отрицательным!');
            }
            console.error('Не может быть отрицательным!');
          }
        }
        if (btn.classList.contains('card__counter-btn--plus')) {
          setTimeout(() => {
            counter++;
            input.value = counter;
          }, 200);
        }
      };
    });
  }
};

export {initCount};
//  Кнопки плюс и минус -- Конец --
