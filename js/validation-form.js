const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', () => {
  const MINTITLELENGTH = 30;
  const MAXTITLELENGTH = 100;
  if (titleInput.value.length < MINTITLELENGTH){
    titleInput.setCustomValidity(`Еще минимум ${MINTITLELENGTH-titleInput.value.length} символов`);
  } else if (titleInput.value.length > MAXTITLELENGTH){
    titleInput.setCustomValidity(`Удалите лишние ${titleInput.value.length - MAXTITLELENGTH} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const priceInput = document.querySelector('#price');
priceInput.addEventListener('input', () => {
  const MAXPRICEVALUE = 1000000;
  if (priceInput.value > MAXPRICEVALUE){
    priceInput.setCustomValidity('Введите число до 1000000');
  }  else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Введите положительное число');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const ROOMSGUESTDEPENDENCE = {
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

  ROOMSGUESTDEPENDENCE[evt.target.value].forEach((item) => {
    document.querySelector('#capacity').querySelector(`option[value='${item}']`).disabled = false;
    document.querySelector('#capacity').value = item;
  });
};

roomsInput.addEventListener('change', changeGuests);


const typeHouseInput = document.querySelector('#type');
const TYPEHOUSEPRICEDEPENDENCE = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const changeMinPrice = function (evt){
  document.querySelector('#price').min = TYPEHOUSEPRICEDEPENDENCE[evt.target.value];
  document.querySelector('#price').placeholder = `от ${TYPEHOUSEPRICEDEPENDENCE[evt.target.value]}`;
};

typeHouseInput.addEventListener('change', changeMinPrice);

const changeTimeIn = function (evt){
  document.querySelector('#timeout').value = evt.target.value;
};
document.querySelector('#timein').addEventListener('change', changeTimeIn);

const changeTimeOut = function (evt){
  document.querySelector('#timein').value = evt.target.value;
};
document.querySelector('#timeout').addEventListener('change', changeTimeOut);


const formAd = document.querySelector('.ad-form');

const addEscListener = function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    document.body.lastChild.remove();
    document.removeEventListener('keydown', addEscListener);
  }
};
const addClickListener = function (){
  document.body.lastChild.remove();
  document.body.removeEventListener('click', addClickListener);
};

const validateForm = function (evt){
  evt.preventDefault();
  document.addEventListener('keydown', addEscListener);
  document.body.addEventListener('click', addClickListener);

  if (formAd.checkValidity()){
    const modalSuccess = document.querySelector('#success').content.cloneNode(true);
    document.querySelector('.ad-form').reset();
    document.body.appendChild(modalSuccess);

  } else {
    const modalError = document.querySelector('#error').content.cloneNode(true);
    document.body.appendChild(modalError);
    document.querySelector('.error__button').addEventListener('click', addClickListener);
  }

};

formAd.addEventListener('submit', validateForm);

