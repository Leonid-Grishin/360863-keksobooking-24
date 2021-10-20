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

const roomsInput = document.querySelector('#room_number');

const makeАvailable = function () {

  document.querySelectorAll('#capacity > *').forEach((selector)=>{selector.setAttribute('disabled', 'disables'); selector.removeAttribute('selected');});

  if (roomsInput.value === '100') {

    document.querySelector('#capacity').querySelector('[value=\'0\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'0\']').setAttribute('selected','selected');
  } else if (roomsInput.value === '2') {

    document.querySelector('#capacity').querySelector('[value=\'2\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'1\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'2\']').setAttribute('selected','selected');
  } else if (roomsInput.value === '3') {

    document.querySelector('#capacity').querySelector('[value=\'2\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'1\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'3\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'3\']').setAttribute('selected','selected');
  } else if (roomsInput.value === '1') {

    document.querySelector('#capacity').querySelector('[value=\'1\']').removeAttribute('disabled');
    document.querySelector('#capacity').querySelector('[value=\'1\']').setAttribute('selected','selected');
  }

};

roomsInput.addEventListener('change', makeАvailable);

