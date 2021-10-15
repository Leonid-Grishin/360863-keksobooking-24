import {SIMILAR_ADS } from './data.js';

console.log(SIMILAR_ADS[1].offer.title);

const SIMILARADSTEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const MAP = document.querySelector('#map-canvas');

const HOUSESTYPES = {
  flat: 'Квартира ',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const ADS = new Array(SIMILAR_ADS.length).fill(0);

for (let i=0; i<SIMILAR_ADS.length; i++) {
  const ADTEMPLATE = SIMILARADSTEMPLATE.cloneNode(true);

  if (typeof SIMILAR_ADS[i].offer.title !== 'undefined') {
    ADTEMPLATE.querySelector('.popup__title').textContent = SIMILAR_ADS[i].offer.title;
  } else {
    ADTEMPLATE.querySelector('.popup__title').setAttribute('hidden', true);
  }

  if (typeof SIMILAR_ADS[i].offer.address !== 'undefined') {
    ADTEMPLATE.querySelector('.popup__text--address').textContent = SIMILAR_ADS[i].offer.address;
  } else {
    ADTEMPLATE.querySelector('.popup__text--address').setAttribute('hidden', true);
  }

  if (typeof SIMILAR_ADS[i].offer.price !== 'undefined' && SIMILAR_ADS[i].offer.price > 0){
    ADTEMPLATE.querySelector('.popup__text--price').textContent = `${SIMILAR_ADS[i].offer.price} ₽/ночь`;
  } else {
    ADTEMPLATE.querySelector('.popup__text--price').setAttribute('hidden', true);
  }

  const OFFERTYPE = SIMILAR_ADS[i].offer.type;
  ADTEMPLATE.querySelector('.popup__type').textContent = HOUSESTYPES[OFFERTYPE];

  if(typeof SIMILAR_ADS[i].offer.rooms !== 'undefined' && typeof SIMILAR_ADS[i].offer.guests !== 'undefined' && SIMILAR_ADS[i].offer.rooms > 0 && SIMILAR_ADS[i].offer.guests > 0) {
    ADTEMPLATE.querySelector('.popup__text--capacity').textContent = `${SIMILAR_ADS[i].offer.rooms} комнаты для ${SIMILAR_ADS[i].offer.guests} гостей`;
  } else {
    ADTEMPLATE.querySelector('.popup__text--capacity').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.checkin !== 'undefined' && typeof SIMILAR_ADS[i].offer.checkout !== 'undefined') {
    ADTEMPLATE.querySelector('.popup__text--time').textContent = `Заезд после ${SIMILAR_ADS[i].offer.checkin}, выезд до ${SIMILAR_ADS[i].offer.checkout}`;
  } else {
    ADTEMPLATE.querySelector('.popup__text--time').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.features !== 'undefined' && SIMILAR_ADS[i].offer.features.length > 0) {
    const FEATURESOFFER = SIMILAR_ADS[i].offer.features;
    const FEATURESCONTAINER = ADTEMPLATE.querySelector('.popup__features');
    const FEATURESLISTSFRAGMENT = document.createDocumentFragment();
    FEATURESOFFER.forEach((featureItem) => {
      const FEATURESLISTITEM = ADTEMPLATE.querySelector(`.popup__feature--${featureItem}`);
      if (FEATURESLISTITEM) {
        FEATURESLISTSFRAGMENT.append(FEATURESLISTITEM);
      }
    });
    FEATURESCONTAINER.innerHTML = '';
    FEATURESCONTAINER.append(FEATURESLISTSFRAGMENT);
  } else {
    ADTEMPLATE.querySelector('.popup__features').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.description !== 'undefined') {
    ADTEMPLATE.querySelector('.popup__description').textContent = SIMILAR_ADS[i].offer.description;
  } else {
    ADTEMPLATE.querySelector('.popup__description').setAttribute('hidden', true);
  }

  if(SIMILAR_ADS[i].offer.photos !== 'undefined' && SIMILAR_ADS[i].offer.photos.length > 0){
    const PHOTOSOFFER = SIMILAR_ADS[i].offer.photos;
    const PHOTOSCONTAINER =  ADTEMPLATE.querySelector('.popup__photos');
    const PHOTOLISTSFRAGMENT = document.createDocumentFragment();
    PHOTOSOFFER.forEach((photoItem) =>
    {   const NEWPHOTOSLISTITEM = PHOTOSCONTAINER.querySelector('.popup__photo').cloneNode(true);
      NEWPHOTOSLISTITEM.src = photoItem;
      PHOTOLISTSFRAGMENT.append(NEWPHOTOSLISTITEM);
    });
    PHOTOSCONTAINER.innerHTML = '';
    PHOTOSCONTAINER.append(PHOTOLISTSFRAGMENT);
  } else {
    ADTEMPLATE.querySelector('.popup__photos').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].author.avatar !== 'undefined'){
    ADTEMPLATE.querySelector('.popup__avatar').src = SIMILAR_ADS[i].author.avatar;
  } else {
    ADTEMPLATE.querySelector('.popup__avatar').setAttribute('hidden', true);
  }

  ADS[i] = ADTEMPLATE;

}
MAP.append(ADS[2]);

