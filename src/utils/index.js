export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function request(url) {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    })
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}