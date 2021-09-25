function getRandomIntInclusive(min, max) {
  min = (min < 0) ? 0 : Math.ceil(min);
  max = (max < 0) ? 0 : Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(10.5, -1));

function getRandomFloatInclusive(min, max, float) {
  min = (min < 0) ? 0 : min;
  max = (max < 0) ? 0 : max;
  return (Math.random() * (max - min) + min).toFixed(float);
}
console.log(getRandomFloatInclusive(5, 1, 3));

