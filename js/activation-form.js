const makeForm = (methodClass = 'add', methodAtribute = 'setAttribute', parentClass, classChanged, atribute, atributeValue) => {
  document.querySelector(`.${parentClass}`).classList[methodClass](classChanged);
  document.querySelectorAll(`form.${parentClass} > *`).forEach((item) => {
    item[methodAtribute](atribute, atributeValue);
  });
};

const deactivateForm = () => {
  makeForm('add', 'setAttribute', 'ad-form', 'ad-form--disabled', 'disabled', 'disabled');
  makeForm('add', 'setAttribute','map__filters', 'ad-form--disabled', 'disabled', 'disabled');
};

const activateForm = () => {
  makeForm('remove', 'removeAttribute', 'ad-form', 'ad-form--disabled', 'disabled');
  makeForm('remove', 'removeAttribute','map__filters', 'ad-form--disabled', 'disabled');
};

deactivateForm();
activateForm();

export {deactivateForm, activateForm};

/*function deactivateForm(){

  document.querySelector('.ad-form').classList.add('ad-form--disabled');

  const fieldItems = document.querySelectorAll('form.ad-form > *');
  fieldItems.forEach((fieldItem) => {
    fieldItem.setAttribute('disabled', 'disabled');
  });

  document.querySelector('.map__filters').classList.add('ad-form--disabled');

  const filterItems = document.querySelectorAll('form.map__filters > *');
  filterItems.forEach((filterItem) => {
    filterItem.setAttribute('disabled', 'disabled');
  });
}

deactivateForm();

function activateForm(){

  document.querySelector('.ad-form').classList.remove('ad-form--disabled');

  const fieldItems = document.querySelectorAll('form.ad-form > *');
  fieldItems.forEach((fieldItem) => {
    fieldItem.removeAttribute('disabled');
  });

  document.querySelector('.map__filters').classList.remove('ad-form--disabled');

  const filterItems = document.querySelectorAll('form.map__filters > *');
  filterItems.forEach((filterItem) => {
    filterItem.removeAttribute('disabled');
  });
}

activateForm();*/
