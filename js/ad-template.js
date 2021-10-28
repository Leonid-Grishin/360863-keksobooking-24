import {SIMILAR_ADS } from './data.js';

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

const fillElement = (parent, selector, prop, data, isCondition = true) => {
  const elem = parent.querySelector(selector);
  if (isCondition) {
    elem[prop] = data;
  } else {
    elem.setAttribute('hidden', true);
  }
};

const fillSeveralElements = (parent, selector, prop = 'src', data, isCondition = true) => {
  if (isCondition) {
    const LISTSFRAGMENT = document.createDocumentFragment();
    data.forEach(
      (item) => {
        if (prop === 'src') {
          const NEWPHOTOSLISTITEM = parent.querySelector('.popup__photo').cloneNode(true);
          NEWPHOTOSLISTITEM[prop] = item;
          LISTSFRAGMENT.append(NEWPHOTOSLISTITEM);
        }
        else {
          const LISTITEM = parent.querySelector(`.popup__feature--${item}`);
          if (LISTITEM) {
            LISTSFRAGMENT.append(LISTITEM);
          }
        }
      },
    );
    parent.querySelector(selector).innerHTML = '';
    parent.querySelector(selector).append(LISTSFRAGMENT);
  } else {
    parent.querySelector(selector).setAttribute('hidden', true);}
};


const createCard = (adData) => {
  const ADTEMPLATE = SIMILARADSTEMPLATE.cloneNode(true);

  fillElement(ADTEMPLATE, '.popup__title', 'textContent', adData.offer.title, adData.offer.title !== undefined);
  fillElement(ADTEMPLATE, '.popup__text--address', 'textContent', adData.offer.address, adData.offer.address !== undefined);
  fillElement(ADTEMPLATE, '.popup__text--price', 'textContent', `${adData.offer.price} ₽/ночь`, adData.offer.price !== undefined);
  fillElement(ADTEMPLATE, '.popup__text--capacity', 'textContent', `${adData.offer.rooms} комнаты для ${adData.offer.guests} гостей`, adData.offer.rooms && adData.offer.guests !== undefined);
  fillElement(ADTEMPLATE, '.popup__text--time', 'textContent', `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`, adData.offer.checkin && adData.offer.checkout !== undefined);
  fillElement(ADTEMPLATE, '.popup__description', 'textContent', adData.offer.description, adData.offer.description !== undefined);
  fillElement(ADTEMPLATE, '.popup__avatar', 'src', adData.author.avatar, adData.author.avatar !== undefined);
  fillElement(ADTEMPLATE, '.popup__type', 'textContent', HOUSESTYPES[adData.offer.type], adData.offer.type !== undefined);
  fillSeveralElements(ADTEMPLATE, '.popup__photos', 'src', adData.offer.photos, adData.offer.photos !== undefined);
  fillSeveralElements(ADTEMPLATE, '.popup__features', false, adData.offer.features, adData.offer.features !== undefined);

  return ADTEMPLATE;
};

//MAP.append(createCard(SIMILAR_ADS[4]));

export {MAP, SIMILAR_ADS, createCard};
