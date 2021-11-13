import {resetMainPing, resetMapView} from './reset.js';
import {getData, sendData} from './api.js';
import {filterAds} from './map-filter.js';
import {showAlert} from './util.js';
import './ad-photos.js';

const formAd = document.querySelector('.ad-form');

const addCloseListener = function () {
  if (document.body.children[document.body.children.length-1] === document.querySelector('.success')){
    [formAd, document.querySelector('.map__filters')].forEach((item)=>(item.reset()));
    [document.querySelector('.success'), document.querySelector('.image__preview'), document.querySelector('.leaflet-popup')].forEach((item)=>{if(item){item.remove();}});
    resetMainPing();
    resetMapView();
    getData('https://24.javascript.pages.academy/keksobooking/data', filterAds, showAlert);
    document.querySelector('.ad-form-header__preview').childNodes[1].src = 'img/muffin-grey.svg';
  }
  if (document.body.children[document.body.children.length-1] === document.querySelector('.error')) {
    document.querySelector('.error').remove();
  }
};

const addEscCloserListener = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();}
  addCloseListener();
  document.removeEventListener('keydown', addEscCloserListener);
};

const showSuccess = () => {
  document.body.appendChild(document.querySelector('#success').content.cloneNode(true));
  document.addEventListener('keydown', addEscCloserListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const showFail = function () {
  const errorTemplate = document.querySelector('#error');
  document.body.appendChild(errorTemplate.content.cloneNode(true));
  document.querySelector('.error__button').addEventListener('click', addCloseListener);
  document.addEventListener('keydown', addEscCloserListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addCloseListener);
};

const addSubmitListener = () => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData('https://24.javascript.pages.academy/keksobooking', showSuccess, showFail, new FormData(evt.target));
  });
};

export {addSubmitListener};
