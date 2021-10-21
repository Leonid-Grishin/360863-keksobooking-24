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


document.querySelector('.ad-form').addEventListener('submit', (evt)=> {

  evt.preventDefault();

  if (document.querySelector('.ad-form').checkValidity()) {
    const modalSuccess = document.querySelector('#success').content.cloneNode(true);
    document.body.appendChild(modalSuccess);

    const escListener = function (evtModal){
      if (evtModal.key === 'Escape' || evtModal.key === 'Esc') {
        document.querySelector('.success').remove();
      }
    };

    const clickListener = function (){
      document.querySelector('.success').remove();
    };

    document.querySelector('.success').addEventListener('keydown', escListener);
    document.querySelector('.success').addEventListener('click', clickListener);

  } else {
    const modalError = document.querySelector('#error').content.cloneNode(true);
    document.body.appendChild(modalError);

    const escListener = function (evtModal){
      if (evtModal.key === 'Escape' || evtModal.key === 'Esc') {
        document.querySelector('.error').remove();
      }
    };

    const clickListener = function (){
      document.querySelector('.error').remove();
    };

    document.querySelector('.error').addEventListener('keydown', escListener);
    document.querySelector('.error__button').addEventListener('click', clickListener);
    document.querySelector('.error').addEventListener('click', clickListener);


  }
});

/*

1. получилось слишком громоздкая часть с комнатами
2. почему то не получается сделать условие, чтобы на клавишу esc закарывалась модалка
3. нужно удалить все addEventListener когда открывается модальное окно?
4. после того как модалка закроется надо тоже все event listner удалять, или если удалиться эллемент dom (сама модалка, то и листнеры тоже удаляться)

*/


