import {activateForm, deactivateForm} from './activation-form.js';
import {SIMILAR_ADS, createCard} from './ad-template.js';
import {getRandomIntInclusive} from './util.js';

deactivateForm();
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


const markerGroup = L.layerGroup().addTo(mapBooking);

const createMarkerAd = (item) => {
  const iconMarkerAd = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerAd = L.marker({
    lat: item['location']['lat'],
    lng: item['location']['lng'],
  },
  {
    icon: iconMarkerAd,
  },
  );

  markerAd
    .addTo(markerGroup)
    .bindPopup(createCard(item));
};

const numberX = getRandomIntInclusive(0, SIMILAR_ADS.length-11); //не могу придумать правильное название для переменной
SIMILAR_ADS.slice(numberX, numberX + 10).forEach((item)=>{
  createMarkerAd(item);
});


const getRooms = function (offer, value){
  if (value === 'any') {return offer >= 0;}
  else if (value === '1') {return offer === 1;}
  else if (value === '2') {return offer === 2;}
  else if (value === '3') {return offer === 3;}
};

const getRoomType = function (offer, value){
  if (value === 'any') {return ' ';}
  else if (value === 'bungalow') {return offer === 'bungalow';}
  else if (value === 'flat') {return offer === 'flat';}
  else if (value === 'hotel') {return offer === 'hotel';}
  else if (value === 'house') {return offer === 'house';}
  else if (value === 'palace') {return offer === 'palace';}
};

const getPrice = function (offer, value){
  if (value === 'any') {return offer >= 0;}
  else if (value === 'middle') {return offer >= 10000 && offer <=50000;}
  else if (value === 'low') {return offer < 10000;}
  else if (value === 'high') {return offer > 50000;}
};

const getGuestd = function (offer, value){
  if (value === 'any') {return offer >= 0;}
  else if (value === '2') {return offer === 2 ;}
  else if (value === '1') {return offer === 1;}
  else if (value === '0') {return offer === 100;} //вот тут что нужно искать?
};

/*const featuresCheckedD = document.querySelectorAll('.map__checkbox');
const offerD = [].map.call(featuresCheckedD, (item) => item.value);
console.log(offerD);*/

const getFeatures = function (offer){
  const featuresChecked = document.querySelectorAll('.map__checkbox:checked');
  return offer === [].map.call(featuresChecked, (item) => item.value);
};

document.querySelector('.map__filters').addEventListener('change', () => {
  markerGroup.clearLayers();


  console.log([].map.call(document.querySelectorAll('.map__checkbox:checked'), (item) => item.value));

  const newAdsFilter = SIMILAR_ADS.filter((item) => (getRoomType(item['offer']['type'], document.querySelector('#housing-type').value)
      && getRooms(item['offer']['rooms'], document.querySelector('#housing-rooms').value)
      && getPrice(item['offer']['price'], document.querySelector('#housing-price').value)
      && getGuestd(item['offer']['guests'], document.querySelector('#housing-guests').value)
      && getFeatures(item['offer']['features'])
  ),


  );

  const numberY = getRandomIntInclusive(0, newAdsFilter.length-11);
  newAdsFilter.slice(numberY, numberY + 10).forEach((item) => {
    createMarkerAd(item);
  });
});

document.querySelector('.map__features').addEventListener('click', ()=>{

});

/*document.querySelectorAll('.map__checkbox').forEach((item)=>{
  console.log(item.value);
});*/


document.querySelector('.ad-form__reset').addEventListener('click', ()=>{
  if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
});

//console.info(Array.from(document.querySelectorAll('.map__checkbox')));
//console.log(document.querySelectorAll('.map__checkbox'));
export {mapBooking, resetMainPing, resetMapView};
