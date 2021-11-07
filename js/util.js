function getRandomIntInclusive(min, max) {
  min = (min < 0) ? 0 : Math.ceil(min);
  max = (max < 0) ? 0 : Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatInclusive(min, max, float) {
  min = (min < 0) ? 0 : min;
  max = (max < 0) ? 0 : max;
  return (Math.random() * (max - min) + min).toFixed(float);
}

function getUniqueElement(argument) {
  const ONE_AVATAR = argument[0];
  argument.shift();
  return ONE_AVATAR;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomIntInclusive, getRandomFloatInclusive, getUniqueElement, showAlert};

