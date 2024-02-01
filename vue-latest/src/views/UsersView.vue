<template>
  <main class="users-container">
    <h1>Hello from users</h1>
    <p v-if="loading">Loading users...</p>
    <ul v-else class="users">
      <li v-for="user in userList" :key="user.id" class="user">
        {{ user.name }}
      </li>
    </ul>
    <p v-if="error">Ups something bad happens ⚠</p>
  </main>
</template>

<script setup>
import { useFetch } from '../utils/useFetch';

const { data: userList, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users', {
  simulateDelay: false,
  simulateError: false,
  cache: true,
});

console.log('userList', userList.value);

</script>

<style scoped>
  .users-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .users {
    list-style: none;
    padding: 0;
  }

  .user {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .user:last-child {
    border-bottom: 0;
  }
</style>
