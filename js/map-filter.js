import {createMarkerAd, markerGroup} from './map.js';
const MAX_COUNT_ADS = 10;

const getFilterItems = function (selector, item){
  if (document.querySelector(`#housing-${selector}`).value === 'any'){
    return ' ';
  } else if (Number.isInteger(item.offer[selector])){
    return item.offer[selector] === +document.querySelector(`#housing-${selector}`).value;
  }
  return item.offer[selector] === document.querySelector(`#housing-${selector}`).value;
};

const getPrice = function (offer, value){
  if (value === 'any') {return offer >= 0;}
  else if (value === 'middle') {return offer >= 10000 && offer <=50000;}
  else if (value === 'low') {return offer < 10000;}
  else if (value === 'high') {return offer > 50000;}
};

const getFeatures = function (offer){
  const featuresChecked = document.querySelectorAll('.map__checkbox:checked');
  return Array.from(featuresChecked).map((item) => item.value).every((elem) =>  offer && offer.includes(elem));
};

const getAdsRank = (data) => {
  let rank;
  if(data.offer.features === undefined){rank = 0;}
  if(data.offer.features !== undefined){rank = data.offer.features.length;}
  return rank;
};

const compareAds = (AdsA, AdsB) => {
  const rankA = getAdsRank(AdsA);
  const rankB = getAdsRank(AdsB);
  return rankA - rankB;
};

const filterAds = (data) => {
  markerGroup.clearLayers();
  const shownAds = [];
  for (let i = 0; i <= data.length; i++){
    if (data[i] && data[i].offer && getFilterItems('type', data[i]) &&
        getFilterItems('rooms', data[i]) &&
        getFilterItems('guests', data[i]) &&
        getPrice(data[i].offer.price, document.querySelector('#housing-price').value) &&
        getFeatures(data[i].offer.features)){
      shownAds.push(data[i]);
    }
    if (shownAds.length === MAX_COUNT_ADS) {break;}
  }
  shownAds
    .slice()
    .sort(compareAds)
    .forEach((item) => createMarkerAd(item));
};

export {filterAds};


