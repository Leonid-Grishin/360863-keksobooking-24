import {activateForm} from './activation-form.js';
import {createCard} from './ad-template.js';

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

export {marker, mapBooking, markerGroup, createMarkerAd};
