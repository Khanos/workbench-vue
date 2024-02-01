<template>
  <main>
    <div class="home">
      <div>
        <img src="../assets/logo.svg" alt="Vue logo" class="logo" />
        <h1>{{ counterTitle }}</h1>
      </div>
      <div>
        <button @click="decreaseCounter" class="btn">-</button>
        <span class="counter">{{ counter }}</span>
        <button @click="increaseCounter" class="btn">+</button>
      </div>
      <div class="edit">
        <input v-model="counterTitle" type="text" placeholder="Edit the title">
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';

const counter = ref(0);
const counterTitle = ref('This is a counter');
const decreaseCounter = () => counter.value--;
const increaseCounter = () => counter.value++;

watch(counter, (newValue, oldValue) => {
  console.log('The counter changed from', oldValue, 'to', newValue);
  if(newValue > 10) {
    counterTitle.value = 'The counter is greater than 10';
  }
});

</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .btn {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--color-border);
  }

  .counter {
    font-size: 2rem;
    margin: 0 1rem;
  }
  .edit {
    margin-top: 2rem;
  }
  .logo {
    display: block;
    margin: 0 auto;
    width: 4rem;
  }
</style>
