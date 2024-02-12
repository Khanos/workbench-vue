import { shallowRef } from 'vue';

export function useState(value) {
  const currentValue = shallowRef(value);
  const get = () => currentValue.value;
  const set = (newValue) => {
    console.log('setting value to:', newValue);
    currentValue.value = newValue;
  };
  return [get, set];
};