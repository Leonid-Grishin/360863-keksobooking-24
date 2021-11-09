const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', () => {
  const MIN_TITLE_LENGTH = 30;
  if (titleInput.value.length < MIN_TITLE_LENGTH){
    titleInput.setCustomValidity(`Еще минимум ${MIN_TITLE_LENGTH-titleInput.value.length} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const priceInput = document.querySelector('#price');
priceInput.addEventListener('input', () => {
  const MAX_PRICE_VALUE = 1000000;
  if (priceInput.value > MAX_PRICE_VALUE){
    priceInput.setCustomValidity('Введите число до 1000000');
  }  else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Введите положительное число');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const ROOMS_GUEST_DEPENDENCE = {
  1 : [1],
  2 : [1, 2],
  3 : [1, 2, 3],
  100 : [0],
};
const roomsInput = document.querySelector('#room_number');
const changeGuests = function (evt) {
  document.querySelector('#capacity').querySelectorAll('option').forEach((item)=>{
    item.disabled = true;
  });

  ROOMS_GUEST_DEPENDENCE[evt.target.value].forEach((item) => {
    document.querySelector('#capacity').querySelector(`option[value='${item}']`).disabled = false;
    document.querySelector('#capacity').value = item;
  });
};

roomsInput.addEventListener('change', changeGuests);


const typeHouseInput = document.querySelector('#type');
const TYPE_HOUSE_PRICE_DEPENDENCE = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const changeMinPrice = function (evt){
  document.querySelector('#price').min = TYPE_HOUSE_PRICE_DEPENDENCE[evt.target.value];
  document.querySelector('#price').placeholder = `от ${TYPE_HOUSE_PRICE_DEPENDENCE[evt.target.value]}`;
};

typeHouseInput.addEventListener('change', changeMinPrice);

const changeTime = function (mainSelector, dependSelector) {
  document.querySelector(mainSelector).addEventListener(
    'change', (evt) => document.querySelector(dependSelector).value = evt.target.value,
  );
};
changeTime('#timein', '#timeout');
changeTime('#timeout', '#timein');


