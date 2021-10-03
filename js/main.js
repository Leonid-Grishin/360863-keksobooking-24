function getRandomIntInclusive(min, max) {
  min = (min < 0) ? 0 : Math.ceil(min);
  max = (max < 0) ? 0 : Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(10.5, -1);

function getRandomFloatInclusive(min, max, float) {
  min = (min < 0) ? 0 : min;
  max = (max < 0) ? 0 : max;
  return (Math.random() * (max - min) + min).toFixed(float);
}
getRandomFloatInclusive(5, 1, 3);

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES_ALL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ALL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_ADS_COUNT = 10;

let numbers = []; // мы же потом этот массив изменяем, почему eslint говорит что нужно сделать const?
for (let i = 1; i <= SIMILAR_ADS_COUNT; i++){
  numbers.push(i);
}
let userNumbers = numbers.map((num) => (`0${num}`).slice(-2));  //тут мне eslint предложил исправить что-то, но я не понял как это работает, там где доллар. Эту часть я нашел на https://ru.stackoverflow.com/questions/772669/Форматирование-чисел-в-js-01-вместо-1
let avatarsArray = [];
userNumbers.forEach((num) => {
  let avatarUrl = 'img/avatars/user' + num + '.png';
  avatarsArray.push(avatarUrl);
});

function getUniqueElement(arg) {
  let oneAvatar = arg[0];
  arg.shift();
  return oneAvatar;
}

const createAd = () => {
  const AVATAR = getUniqueElement(avatarsArray);

  const LOCATION_RAMDOM = {
    lat: getRandomFloatInclusive(35.65000, 35.70000, 5),
    lng: getRandomFloatInclusive(139.70000, 139.80000, 5),
  };

  const featuresRandom = [];
  for (let i = 0; i <= getRandomIntInclusive(0, FEATURES_ALL.length-1); i++) {
    featuresRandom.push(FEATURES_ALL[i]);
  }

  let photosRandom = [];
  for (let i = 0; i <= getRandomIntInclusive(0, PHOTOS_ALL.length-1); i++) {
    photosRandom.push(PHOTOS_ALL[i]);
  }
  return {
    author: AVATAR,
    offer: {
      title: 'Место для чила',
      address: LOCATION_RAMDOM, //не понимаю как записать адрес с использованием маски
      price: getRandomIntInclusive(0, 100), // как сделать до бесконечности?
      type: TYPES[getRandomIntInclusive(0, TYPES.length-1)],
      guests: getRandomIntInclusive(0, 100), // как сделать до бесконечности?
      checkin: CHECKINS[getRandomIntInclusive(0, CHECKINS.length-1)],
      checkout: CHECKOUTS[getRandomIntInclusive(0, CHECKOUTS.length-1)],
      features: featuresRandom,
      description: 'место для уютного отдыха',
      photos: photosRandom,
    },
    location: LOCATION_RAMDOM,
  };
};

const SIMILAR_ADS = Array.from({length: SIMILAR_ADS_COUNT}, createAd);

