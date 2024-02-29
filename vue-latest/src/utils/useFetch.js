import { ref } from 'vue';
const defaultOptions = {
  cache: false,
  simulateDelay: false,
  simulateError: false,
};
export const useFetch = (url, options = defaultOptions) => {
  const { cache, simulateDelay, simulateError } = options; 
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);
  const key = url.replace(/[^a-zA-Z0-9]/g, '');
  const fetchCall = async () => {
    setTimeout(async () => {
      try {
        if (simulateError) {
          throw new Error('Simulated error');
        }
        const response = await fetch(url);
        const result = await response.json();
        data.value = result;
        if (cache) {
          localStorage.setItem(key, JSON.stringify(result));
        }
      } catch (err) {
        error.value = err;
        console.error('Error fetching data', error);
      } finally {
        loading.value = false;
      }
    }, simulateDelay ? 2000 : 0);
  }
  const cachedData = localStorage.getItem(key);
  if (cache && cachedData) {
    data.value = JSON.parse(cachedData);
    loading.value = false;
  } else {
    fetchCall();
  }
  return { data, error, loading};
}