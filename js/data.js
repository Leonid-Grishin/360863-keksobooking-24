import {getRandomIntInclusive, getRandomFloatInclusive, getUniqueElement} from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES_ALL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ALL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const SIMILAR_ADS_COUNT = 10;

const NUMBERS = new Array(SIMILAR_ADS_COUNT).fill(0);

const AVATARS_ARRAY = NUMBERS.map((element, index) => `img/avatars/user${(`0${index+1}`).slice(-2)}.png`);

const createAd = () => {
  const AVATAR = getUniqueElement(AVATARS_ARRAY);
  const LOCATION_RANDOM = {
    lat: getRandomFloatInclusive(35.65000, 35.70000, 5),
    lng: getRandomFloatInclusive(139.70000, 139.80000, 5),
  };
  const FEATURES_RANDOM = new Array(getRandomIntInclusive(1, FEATURES_ALL.length))
    .fill(0)
    .map((item, index) => FEATURES_ALL[index]);
  const PHOTOS_RANDOM = new Array(getRandomIntInclusive(1, PHOTOS_ALL.length))
    .fill(0)
    .map((item, index) => PHOTOS_ALL[index]);

  return {
    author: {avatar: AVATAR},
    offer: {
      title: 'Место для чила',
      address: `${LOCATION_RANDOM.lat}, ${LOCATION_RANDOM.lng}`,
      price: getRandomIntInclusive(0, 100),
      type: TYPES[getRandomIntInclusive(0, TYPES.length-1)],
      guests: getRandomIntInclusive(0, 100),
      checkin: CHECKINS[getRandomIntInclusive(0, CHECKINS.length-1)],
      checkout: CHECKOUTS[getRandomIntInclusive(0, CHECKOUTS.length-1)],
      features: FEATURES_RANDOM,
      description: 'место для уютного отдыха',
      photos: PHOTOS_RANDOM,
    },
    location: {
      lat: LOCATION_RANDOM.lat,
      lng: LOCATION_RANDOM.lng,
    },
  };
};
const SIMILAR_ADS = Array.from({length: SIMILAR_ADS_COUNT}, createAd);

export {SIMILAR_ADS};
