const getFilterItems = function (selector, item){
  if (document.querySelector(`#housing-${selector}`).value === 'any'){return ' ';}
  else if (Number.isInteger(item['offer'][selector])){return item['offer'][selector] === +document.querySelector(`#housing-${selector}`).value;}
  return item['offer'][selector] === document.querySelector(`#housing-${selector}`).value;
};

const getPrice = function (offer, value){
  if (value === 'any') {return offer >= 0;}
  else if (value === 'middle') {return offer >= 10000 && offer <=50000;}
  else if (value === 'low') {return offer < 10000;}
  else if (value === 'high') {return offer > 50000;}
};

const getFeatures = function (offer){
  const featuresChecked = document.querySelectorAll('.map__checkbox:checked');
  if(featuresChecked.length > 0){return offer === [].map.call(featuresChecked, (item) => item.value);}
  else {return ' ';}
};

export {getFilterItems, getPrice, getFeatures};

