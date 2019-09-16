ymaps.ready(init);

const placemarks = [
  {
    latitude: 55.748975767939264,
    longitude: 37.601977765249224,
    hintContent: '<div class="map__hint">Chocco №4</div>',
    balloonContent: '<div class="map__balloon">Натуральные батончики по адресу: Колымажный пер. 14</div>',
  },
  {
    latitude: 55.75982421826522,
    longitude: 37.58063811032673,
    hintContent: '<div class="map__hint">Chocco №3</div>',
    balloonContent: '<div class="map__balloon">Натуральные батончики по адресу: Кудринская пл. 1с1</div>',
  },
  {
    latitude: 55.74095290725726,
    longitude: 37.58042152760869,
    hintContent: '<div class="map__hint">Chocco №2</div>',
    balloonContent: '<div class="map__balloon">Натуральные батончики по адресу: 1-й Неопалимовский пер. 10</div>',
  },
  {
    latitude: 55.75707353165379,
    longitude: 37.62672718404179,
    hintContent: '<div class="map__hint">Chocco №1</div>',
    balloonContent: '<div class="map__balloon">Натуральные батончики по адресу: Большой Черкасский пер. 11с1</div>',
  }
]

function init() {
  const map = new ymaps.Map ('map', {
    center: [55.75, 37.60],
    zoom: 14,
    controls: ['zoomControl'],
    behaviors: ['drag', 'scrollZoom.disabled'],
  });

  placemarks.forEach(function(obj){
    const placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: obj.hintContent,
      balloonContent: obj.balloonContent,
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/placemark.png'
    });
    map.geoObjects.add(placemark);
  });
}