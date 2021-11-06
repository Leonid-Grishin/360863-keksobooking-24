import {resetMainPing, resetMapView} from './reset.js';
import {getData, sendData} from './api.js';
import {filterAds} from './map-filter.js';
import {showAlert} from './util.js';

const formAd = document.querySelector('.ad-form');
const modalSuccess = document.querySelector('#success').content.cloneNode(true);

const addCloseListener = function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();}
  document.removeEventListener('keydown', addCloseListener);
  if (document.body.children[document.body.children.length-1] === document.querySelector('.success')){
    document.querySelector('.ad-form').reset();
    resetMainPing();
    resetMapView();
    document.querySelector('.map__filters').reset();
    getData('https://24.javascript.pages.academy/keksobooking/data', filterAds, showAlert);
  }
  if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
  document.body.children[document.body.children.length-1].remove();
};

const showSuccess = () => {
  document.body.appendChild(modalSuccess);
  document.addEventListener('keydown', addCloseListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const showFail = function () {
  const modalError = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(modalError);
  document.querySelector('.error__button').addEventListener('click', addCloseListener);
  document.addEventListener('keydown', addCloseListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const sendForm = () => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData('https://24.javascript.pages.academy/keksobooking', showSuccess, showFail, new FormData(evt.target));
  });
};


export {sendForm};
