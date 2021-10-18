const makeForm = (parentClass, parentClassValue, attribute, attributeValue, methodClass, methodAttribute) => {
  document.querySelector(`.${parentClass}`).classList[methodClass](parentClassValue);
  document.querySelectorAll(`form.${parentClass} > *`).forEach((item) => {
    item[methodAttribute](attribute, attributeValue);
  });
};

const deactivateForm = () => {
  makeForm('ad-form', 'ad-form--disabled', 'disabled', 'disabled','add', 'setAttribute');
  makeForm('map__filters', 'ad-form--disabled', 'disabled', 'disabled', 'add', 'setAttribute');
};

const activateForm = () => {
  makeForm('ad-form', 'ad-form--disabled', 'disabled','remove', 'removeAttribute');
  makeForm('map__filters', 'ad-form--disabled', 'disabled','remove', 'removeAttribute');
};

deactivateForm();
activateForm();

export {deactivateForm, activateForm};


