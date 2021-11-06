const getData = (url, onSuccess, onFail) => {
  fetch (url)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      document.querySelector('.map__filters').addEventListener('change', () => onSuccess(data));
    })
    .catch(() => {
      onFail('данные не загрузились');
    });

};


const sendData = (url, onSuccess, onFail, body) => {
  fetch(
    url,
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
