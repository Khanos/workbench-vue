<template>
  <main>
    <div class="home">
      <h1>React Tooling Clone</h1>
      <div>
        <img src="../assets/logo.svg" alt="Vue logo" class="logo" />
        <h1>{{ title() }}</h1>
      </div>
      <div>
        <button @click="decreaseCounter" class="btn">-</button>
        <span class="counter">{{ count() }}</span>
        <button @click="increaseCounter" class="btn">+</button>
      </div>
      <div class="edit">
        <input :value="title()" @input="updateTitle" type="text" placeholder="Edit the title">
      </div>
    </div>
  </main>
</template>

<script setup>
import { useState } from '../utils/useState';
const [count, setCount] = useState(0);
const [title, setTitle] = useState("This is a title");
const increaseCounter = () => {
  const nextCount = Number(count()) + 1;
  setCount(nextCount);
};
const decreaseCounter = () => {
  const nextCount = Number(count()) - 1;
  setCount(nextCount);
};
const updateTitle = (e) => {
  setTitle(e.target.value);
};
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