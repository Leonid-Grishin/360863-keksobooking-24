const MAX_PRICE_VALUE = 1000000;
const MIN_TITLE_LENGTH = 30;

const roomsGuestDependence = {
  1 : [1],
  2 : [1, 2],
  3 : [1, 2, 3],
  100 : [0],
};

const typeHousePriceDependence = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const capacityInput = document.querySelector('#capacity');
const priceInput = document.querySelector('#price');

const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', () => {
  if (titleInput.value.length < MIN_TITLE_LENGTH){
    titleInput.setCustomValidity(`Еще минимум ${MIN_TITLE_LENGTH-titleInput.value.length} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE_VALUE){
    priceInput.setCustomValidity('Введите число до 1000000');
  }  else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Введите положительное число');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const roomsInput = document.querySelector('#room_number');
const changeGuests = function (evt) {
  capacityInput.querySelectorAll('option').forEach((item)=>{
    item.disabled = true;
  });

  roomsGuestDependence[evt.target.value].forEach((item) => {
    capacityInput.querySelector(`option[value='${item}']`).disabled = false;
    capacityInput.value = item;
  });
};

roomsInput.addEventListener('change', changeGuests);

const typeHouseInput = document.querySelector('#type');

const changeMinPrice = function (evt){
  priceInput.min = typeHousePriceDependence[evt.target.value];
  priceInput.placeholder = `от ${typeHousePriceDependence[evt.target.value]}`;
};

typeHouseInput.addEventListener('change', changeMinPrice);

const changeTime = function (mainSelector, dependSelector) {
  document.querySelector(mainSelector).addEventListener(
    'change', (evt) => document.querySelector(dependSelector).value = evt.target.value,
  );
};
changeTime('#timein', '#timeout');
changeTime('#timeout', '#timein');


