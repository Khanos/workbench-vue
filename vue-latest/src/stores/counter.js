import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // this is a normal state
  const doubleCount = computed(() => count.value * 2) // this is getter
  function increment() {
    count.value++
  } // this is an action

  return { count, doubleCount, increment }
});
