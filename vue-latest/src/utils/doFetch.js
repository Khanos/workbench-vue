const doFetch =(url) => {

  const resolveData = (data) => {
    return data;
  };
  const resolveError = (err) => {
    console.error('Error fetching data', err);
  };
  return fetch(url)
    .then(response => response.json())
    .then(resolveData)
    .catch(resolveError);
};

export default doFetch;