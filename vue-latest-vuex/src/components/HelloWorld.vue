<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
const increment = () => store.dispatch('increment');
const decrement = () => store.dispatch('decrement');
const incrementBy = (amount) => store.dispatch('incrementBy', amount);

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <p>{{ count }}</p>
      <button type="button" @click="increment">increment</button>
      <button type="button" class="ml-5" @click="decrement">decrement</button>
      <button type="button" class="ml-5" @click="incrementBy(2)">incrementBy 2</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
