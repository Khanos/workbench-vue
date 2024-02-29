const { 
  VITE_API_URL: API_URL, 
  VITE_SELLER_ID: SELLER_ID
} = import.meta.env

export const fetchProducts = () => {
  const apiUrl = new URL('/sites/MLA/search', API_URL);
  apiUrl.searchParams.append("seller_id", SELLER_ID);
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return data.results;
    })
    .catch(err => {
      console.log(`Something bad happens: ${err}`);
      return [];
    })
};