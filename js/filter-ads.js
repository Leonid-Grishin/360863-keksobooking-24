/*
import {createMarkerAd} from './map.js';
import {markerGroup} from './map.js';
import {getFeatures, getFilterItems, getPrice} from './map-filter.js';

const filterAds = (data) => {
  markerGroup.clearLayers();
  data
    .filter((item) =>
      getFilterItems('type', item) &&
            getFilterItems('rooms', item) &&
            getFilterItems('guests', item) &&
            getPrice(item['offer']['price'], document.querySelector('#housing-price').value) &&
            getFeatures(item['offer']['features']))
    .slice(0, 10)
    .forEach((item) => createMarkerAd(item));
};

export {filterAds};
*/
