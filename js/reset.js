import {marker, mapBooking} from './map.js';
import {getData} from './api.js';
import {filterAds} from './map-filter.js';
import {showAlert} from './util.js';

const leafletPopup = document.querySelector('.leaflet-popup');

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
const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', resetMainPing);
resetButton.addEventListener('click', resetMapView);
resetButton.addEventListener('click', ()=>{document.querySelector('#price').placeholder = 'от 1000';});

resetButton.addEventListener('click', ()=>{
  if (leafletPopup){leafletPopup.remove();}
});

resetButton.addEventListener('click', ()=>{
  document.querySelector('.map__filters').reset();
  getData('https://24.javascript.pages.academy/keksobooking/data', filterAds, showAlert);
});

export {resetMainPing, resetMapView};
