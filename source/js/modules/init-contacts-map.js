/* eslint-disable no-undef */
// Карта на странице проектов -- Начало --
// Map on projects page -- Start --
const initContactsMap = () => {
  let contactsMap = document.getElementById('contacts-map');
  // В этот массив передавать данные для отображения меток на карте
  const locationIcons = [
    {coordinates: [55.789006, 37.729242], balloonContentHeader: '<span>Россия. Москва,<br>ул. Ибрагимова, 31</span>'},
    {coordinates: [55.521800, 37.747610], balloonContentHeader: '<span>Россия. Московская область,<br>Ленинский район, д. Горки, промзона</span>'}
  ];
  if (contactsMap) {
    ymaps.ready(init);
  }
  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    contactsMap = new ymaps.Map(contactsMap, {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.76, 37.64], // Москва
      zoom: 9,
      controls: ['smallMapDefaultSet'],
    });
    for (const point of locationIcons) {
      let contactsMapPlacemark = new ymaps.Placemark(point.coordinates, {
        balloonContentHeader: point.balloonContentHeader,
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/svg/custom-map-placemark.svg',
        // Размеры метки.
        iconImageSize: [40, 65],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      });
      contactsMap.geoObjects.add(contactsMapPlacemark);
    }
    contactsMap.behaviors.disable('scrollZoom');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // ... отключаем перетаскивание карты
      contactsMap.behaviors.disable('drag');
    }
  }
};
export {initContactsMap};
// Карта на странице проектов -- Конец --
// Map on projects page -- End --
