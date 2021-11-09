import {changeFormActivity} from './activation-form.js';
import './validation-form.js';
import {sendForm} from './form-send.js';
import {getData} from './api.js';
import {filterAds} from './map-filter.js';
import {showAlert} from './util.js';
import {debounce} from './utils/debounce.js';


sendForm();
getData(
  'https://24.javascript.pages.academy/keksobooking/data',
  (data) => {
    filterAds(data);
    document.querySelector('.map__filters').addEventListener('change', debounce(() => filterAds(data)));
    changeFormActivity('remove', 'removeAttribute','map__filters', 'ad-form--disabled', 'disabled');
  },
  showAlert);

