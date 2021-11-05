const getData = (url, onSuccess, onFail) => {
  fetch (url)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((SIMILAR_ADS) => {
      onSuccess(SIMILAR_ADS);
      document.querySelector('.map__filters').addEventListener('change', () => onSuccess(SIMILAR_ADS));
    })
    .catch(() => {
      onFail('данные не загрузились');
    });

};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} — ${response.statusText}`);
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
