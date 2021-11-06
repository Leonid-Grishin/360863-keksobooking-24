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

export {deactivateForm, activateForm};

