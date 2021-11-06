const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const HOUSETYPES = {
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
    const listsFragment = document.createDocumentFragment();
    data.forEach(
      (item) => {
        if (prop === 'src') {
          const newPhotosListItem = parent.querySelector('.popup__photo').cloneNode(true);
          newPhotosListItem[prop] = item;
          listsFragment.append(newPhotosListItem);
        }
        else {
          const listItem = parent.querySelector(`.popup__feature--${item}`);
          if (listItem) {
            listsFragment.append(listItem);
          }
        }
      },
    );
    parent.querySelector(selector).innerHTML = '';
    parent.querySelector(selector).append(listsFragment);
  } else {
    parent.querySelector(selector).setAttribute('hidden', true);}
};


const createCard = (adData) => {
  const adTemplate = similarAdsTemplate.cloneNode(true);

  fillElement(adTemplate, '.popup__title', 'textContent', adData.offer.title, adData.offer.title !== undefined);
  fillElement(adTemplate, '.popup__text--address', 'textContent', adData.offer.address, adData.offer.address !== undefined);
  fillElement(adTemplate, '.popup__text--price', 'textContent', `${adData.offer.price} ₽/ночь`, adData.offer.price !== undefined);
  fillElement(adTemplate, '.popup__text--capacity', 'textContent', `${adData.offer.rooms} комнаты для ${adData.offer.guests} гостей`, adData.offer.rooms && adData.offer.guests !== undefined);
  fillElement(adTemplate, '.popup__text--time', 'textContent', `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`, adData.offer.checkin && adData.offer.checkout !== undefined);
  fillElement(adTemplate, '.popup__description', 'textContent', adData.offer.description, adData.offer.description !== undefined);
  fillElement(adTemplate, '.popup__avatar', 'src', adData.author.avatar, adData.author.avatar !== undefined);
  fillElement(adTemplate, '.popup__type', 'textContent', HOUSETYPES[adData.offer.type], adData.offer.type !== undefined);
  fillSeveralElements(adTemplate, '.popup__photos', 'src', adData.offer.photos, adData.offer.photos !== undefined);
  fillSeveralElements(adTemplate, '.popup__features', false, adData.offer.features, adData.offer.features !== undefined);

  return adTemplate;
};

export {createCard};
