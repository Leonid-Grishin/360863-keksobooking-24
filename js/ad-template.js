import {SIMILAR_ADS } from './data.js';


const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const map = document.querySelector('#map-canvas');

const housesTypes = {
  flat: 'Квартира ',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const ads = new Array(SIMILAR_ADS.length).fill(0);

/*SIMILAR_ADS.forEach((ad)*/
for (let i=0; i<SIMILAR_ADS.length; i++) {
  const adTemplate = similarAdsTemplate.cloneNode(true);

  if (typeof SIMILAR_ADS[i].offer.title !== 'undefined') {
    adTemplate.querySelector('.popup__title').textContent = SIMILAR_ADS[i].offer.title;
  } else {
    adTemplate.querySelector('.popup__title').setAttribute('hidden', true);
  }

  if (typeof SIMILAR_ADS[i].offer.address !== 'undefined') {
    adTemplate.querySelector('.popup__text--address').textContent = SIMILAR_ADS[i].offer.address;
  } else {
    adTemplate.querySelector('.popup__text--address').setAttribute('hidden', true);
  }

  if (typeof SIMILAR_ADS[i].offer.price !== 'undefined' && SIMILAR_ADS[i].offer.price > 0){
    adTemplate.querySelector('.popup__text--price').textContent = `${SIMILAR_ADS[i].offer.price} ₽/ночь`;
  } else {
    adTemplate.querySelector('.popup__text--price').setAttribute('hidden', true);
  }

  const offerType = SIMILAR_ADS[i].offer.type;
  adTemplate.querySelector('.popup__type').textContent = housesTypes[offerType];

  if(typeof SIMILAR_ADS[i].offer.rooms !== 'undefined' && typeof SIMILAR_ADS[i].offer.guests !== 'undefined' && SIMILAR_ADS[i].offer.rooms > 0 && SIMILAR_ADS[i].offer.guests > 0) {
    adTemplate.querySelector('.popup__text--capacity').textContent = `${SIMILAR_ADS[i].offer.rooms} комнаты для ${SIMILAR_ADS[i].offer.guests} гостей`;
  } else {
    adTemplate.querySelector('.popup__text--capacity').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.checkin !== 'undefined' && typeof SIMILAR_ADS[i].offer.checkout !== 'undefined') {
    adTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${SIMILAR_ADS[i].offer.checkin}, выезд до ${SIMILAR_ADS[i].offer.checkout}`;
  } else {
    adTemplate.querySelector('.popup__text--time').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.features !== 'undefined' && SIMILAR_ADS[i].offer.features.length > 0) {
    const featuresOffer = SIMILAR_ADS[i].offer.features;
    const featuresContainer = adTemplate.querySelector('.popup__features');
    const featuresListsFragment = document.createDocumentFragment();
    featuresOffer.forEach((featureItem) => {
      const featuresListItem = adTemplate.querySelector(`.popup__feature--${featureItem}`);
      if (featuresListItem) {
        featuresListsFragment.append(featuresListItem);
      }
    });
    featuresContainer.innerHTML = '';
    featuresContainer.append(featuresListsFragment);
  } else {
    adTemplate.querySelector('.popup__features').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].offer.description !== 'undefined') {
    adTemplate.querySelector('.popup__description').textContent = SIMILAR_ADS[i].offer.description;
  } else {
    adTemplate.querySelector('.popup__description').setAttribute('hidden', true);
  }

  if(SIMILAR_ADS[i].offer.photos !== 'undefined' && SIMILAR_ADS[i].offer.photos.length > 0){
    const photosOffer = SIMILAR_ADS[i].offer.photos;
    const photosContainer =  adTemplate.querySelector('.popup__photos');
    const photoListsFragment = document.createDocumentFragment();
    photosOffer.forEach((photoItem) =>
    {   const newphotosListItem = photosContainer.querySelector('.popup__photo').cloneNode(true);
      newphotosListItem.src = photoItem;
      photoListsFragment.append(newphotosListItem);
    });
    photosContainer.innerHTML = '';
    photosContainer.append(photoListsFragment);
  } else {
    //adTemplate.querySelector('.popup__photos').innerHTML = '';
    adTemplate.querySelector('.popup__photos').setAttribute('hidden', true);
  }

  if(typeof SIMILAR_ADS[i].author.avatar !== 'undefined'){
    adTemplate.querySelector('.popup__avatar').src = SIMILAR_ADS[i].author.avatar;
  } else {
    adTemplate.querySelector('.popup__avatar').setAttribute('hidden', true);
  }


  ads[i] = adTemplate;

}
map.append(ads[2]);

