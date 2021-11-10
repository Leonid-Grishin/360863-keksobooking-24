const changeFormActivity = (methodClass = 'add', methodAtribute = 'setAttribute', parentClass, classChanged, atribute, atributeValue) => {
  document.querySelector(`.${parentClass}`).classList[methodClass](classChanged);
  document.querySelectorAll(`form.${parentClass} > *`).forEach((item) => {
    item[methodAtribute](atribute, atributeValue);
  });
};

const deactivateForm = () => {
  changeFormActivity('add', 'setAttribute', 'ad-form', 'ad-form--disabled', 'disabled', 'disabled');
  changeFormActivity('add', 'setAttribute','map__filters', 'ad-form--disabled', 'disabled', 'disabled');
};

const activateForm = () => {
  changeFormActivity('remove', 'removeAttribute', 'ad-form', 'ad-form--disabled', 'disabled');
};

deactivateForm();

export {deactivateForm, activateForm, changeFormActivity};

