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

export {getRandomIntInclusive, getRandomFloatInclusive, getUniqueElement};

