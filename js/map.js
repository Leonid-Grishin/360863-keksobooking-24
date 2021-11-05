import {activateForm, deactivateForm} from './activation-form.js';
import {createCard} from './ad-template.js';
/*import {SIMILAR_ADS} from './data.js';
import {getFilterItems, getPrice, getFeatures} from './map-filter.js';
import {createMarkerAd} from './render-marker.js';*/

deactivateForm();

//загружаем основу карты
const mapBooking = L.map('map-canvas');

mapBooking.on('load', () => {
  activateForm();
});
mapBooking.setView(
  {
    lat:35.68172,
    lng:139.75392,
  },
  12,
);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapBooking);


//добавляем красный маркер
const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const marker = L.marker(
  {
    lat:35.68172,
    lng:139.75392,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(mapBooking);

marker.on('moveend', (evt) => {
  const markerLat = evt.target.getLatLng()['lat'].toFixed(5);
  const markerLng = evt.target.getLatLng()['lng'].toFixed(5);
  document.querySelector('#address').value = `${markerLat}, ${markerLng}`;
});

//добавляем группу синих маркеров по нашим данным
const markerGroup = L.layerGroup().addTo(mapBooking);

const createMarkerAd = (item) => {
  const iconMarkerAd = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerAd = L.marker({
    lat: item.location.lat,
    lng: item.location.lng,
  },
  {
    icon: iconMarkerAd,
  },
  );

  markerAd
    .addTo(markerGroup)
    .bindPopup(createCard(item));
};

/*SIMILAR_ADS.slice(0, 10).forEach((item)=>{
  createMarkerAd(item, markerGroup);
});*/


//добавляем фильтрацию синих маркеров по параметрам


/*document.querySelector('.map__filters').addEventListener('change', () => {
  markerGroup.clearLayers();

  const newAdsFilter = SIMILAR_ADS.filter((item) => (
    getFilterItems('type', item)
    && getFilterItems('rooms', item)
    && getFilterItems('guests', item)
    && getPrice(item['offer']['price'], document.querySelector('#housing-price').value)
    && getFeatures(item['offer']['features'])
  ),
  );

  newAdsFilter.slice(0, 10).forEach((item) => {
    createMarkerAd(item, markerGroup);
  });
});*/


//добавляем скрытие объявления и возвращение к начальным координатам при клике на reset
const resetMainPing = function () {
  marker.setLatLng(
    {
      lat:35.68172,
      lng:139.75392,
    },
  );
};

const resetMapView = function () {
  mapBooking.setView(
    {
      lat:35.68172,
      lng:139.75392,
    },
    12,
  );
};

document.querySelector('.ad-form__reset').addEventListener('click', resetMainPing);
document.querySelector('.ad-form__reset').addEventListener('click', resetMapView);

document.querySelector('.ad-form__reset').addEventListener('click', ()=>{
  if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
});

export {mapBooking, resetMainPing, resetMapView, markerGroup, createMarkerAd};
