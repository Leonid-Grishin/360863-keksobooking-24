import './validation-form.js';
import {sendForm} from './form-send.js';
import {getData} from './api.js';
import {filterAds} from './map-filter.js';

sendForm();
getData('https://24.javascript.pages.academy/keksobooking/data', filterAds, alert);


