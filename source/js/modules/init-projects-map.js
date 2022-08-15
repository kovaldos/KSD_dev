/* eslint-disable no-undef */
// Карта на странице проектов -- Начало --
// Map on projects page -- Start --
const initProjectsMap = () => {
  let projectsMap = document.getElementById('map01');
  // В этот массив передавать данные для отображения меток на карте
  const locationIcon = [
    {coordinates: [55.781028, 37.626493], balloonContentHeader: '<span>Россия. Москва,<br>Олимпийский проспект, 16с1</span>'}
  ];
  if (projectsMap) {
    ymaps.ready(init);
  }
  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    projectsMap = new ymaps.Map(projectsMap, {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.76, 37.64], // Москва
      zoom: 10,
      controls: ['smallMapDefaultSet'],
    });
    for (const point of locationIcon) {
      let projectsMapPlacemark = new ymaps.Placemark(point.coordinates, {
        balloonContentHeader: point.balloonContentHeader,
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './../../img/svg/custom-map-placemark.svg',
        // Размеры метки.
        iconImageSize: [40, 65],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      });
      projectsMap.geoObjects.add(projectsMapPlacemark);
    }
    projectsMap.behaviors.disable('scrollZoom');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // ... отключаем перетаскивание карты
      projectsMap.behaviors.disable('drag');
    }
  }
};
export {initProjectsMap};
// Карта на странице проектов -- Конец --
// Map on projects page -- End --
