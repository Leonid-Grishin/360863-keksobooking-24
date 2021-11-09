import {resetMainPing, resetMapView} from './reset.js';
import {getData, sendData} from './api.js';
import {filterAds} from './map-filter.js';
import {showAlert} from './util.js';

const formAd = document.querySelector('.ad-form');

const addCloseListener = function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();}
  document.removeEventListener('keydown', addCloseListener);
  if (document.body.children[document.body.children.length-1] === document.querySelector('.success')){
    formAd.reset();
    resetMainPing();
    resetMapView();
    document.querySelector('.map__filters').reset();
    getData('https://24.javascript.pages.academy/keksobooking/data', filterAds, showAlert);
    document.querySelector('.success').remove();
  }
  if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
  if (document.body.children[document.body.children.length-1] === document.querySelector('.error')) {document.querySelector('.error').remove();}
};

const showSuccess = () => {
  document.body.appendChild(document.querySelector('#success').content.cloneNode(true));
  document.addEventListener('keydown', addCloseListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const showFail = function () {
  const errorTemplate = document.querySelector('#error');
  document.body.appendChild(errorTemplate.content.cloneNode(true));
  document.querySelector('.error__button').addEventListener('click', addCloseListener);
  document.addEventListener('keydown', addCloseListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const addSubmitListener = () => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData('https://24.javascript.pages.academy/keksobooking', showSuccess, showFail, new FormData(evt.target));
  });
};


export {addSubmitListener};
