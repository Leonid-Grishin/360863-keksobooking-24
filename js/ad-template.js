const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const HOUSE_TYPES = {
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


const createCard = (data) => {
  const adTemplate = similarAdsTemplate.cloneNode(true);

  fillElement(adTemplate, '.popup__title', 'textContent', data.offer.title, data.offer.title !== undefined);
  fillElement(adTemplate, '.popup__text--address', 'textContent', data.offer.address, data.offer.address !== undefined);
  fillElement(adTemplate, '.popup__text--price', 'textContent', `${data.offer.price} ₽/ночь`, data.offer.price !== undefined);
  fillElement(adTemplate, '.popup__text--capacity', 'textContent', `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`, data.offer.rooms && data.offer.guests !== undefined);
  fillElement(adTemplate, '.popup__text--time', 'textContent', `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`, data.offer.checkin && data.offer.checkout !== undefined);
  fillElement(adTemplate, '.popup__description', 'textContent', data.offer.description, data.offer.description !== undefined);
  fillElement(adTemplate, '.popup__avatar', 'src', data.author.avatar, data.author.avatar !== undefined);
  fillElement(adTemplate, '.popup__type', 'textContent', HOUSE_TYPES[data.offer.type], data.offer.type !== undefined);
  fillSeveralElements(adTemplate, '.popup__photos', 'src', data.offer.photos, data.offer.photos !== undefined);
  fillSeveralElements(adTemplate, '.popup__features', false, data.offer.features, data.offer.features !== undefined);

  return adTemplate;
};

export {createCard};
