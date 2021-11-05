import {resetMainPing, resetMapView} from './map.js';
import {sendData} from './api.js';

const formAd = document.querySelector('.ad-form');
const modalSuccess = document.querySelector('#success').content.cloneNode(true);

const addEscListener = function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    document.body.children[document.body.children.length-1].remove();
    document.removeEventListener('keydown', addEscListener);
    if (modalSuccess){
      document.querySelector('.ad-form').reset();
      resetMainPing();
      resetMapView();
    }
    if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
  }
};
const addClickListener = function (){
  document.body.children[document.body.children.length-1].remove();
  document.removeEventListener('keydown', addEscListener);
  if (modalSuccess){
    document.querySelector('.ad-form').reset();
    resetMainPing();
    resetMapView();
  }
  if (document.querySelector('.leaflet-popup')){document.querySelector('.leaflet-popup').remove();}
};


const showSuccess = () => {
  document.body.appendChild(modalSuccess);
  document.addEventListener('keydown', addEscListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addClickListener);
};

const showFail = function () {
  const modalError = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(modalError);
  document.querySelector('.error__button').addEventListener('click', addClickListener);
  document.addEventListener('keydown', addEscListener);
  document.body.children[document.body.children.length-1].addEventListener('click', addClickListener);
};

const sendForm = () => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(showSuccess, showFail, new FormData(evt.target));
  });
};

export {sendForm};
