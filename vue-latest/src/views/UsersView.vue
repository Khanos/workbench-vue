<template>
  <main class="users-container">
    <h1>Hello from users</h1>
    <ul class="users">
      <li v-for="user in userList" :key="user.id" class="user">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const userList = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)
    userList.value = data;
  } catch (error) {
    console.log('Error fetching the users', error);
  }
};

onMounted(() => {
  return userList.value.length > 0 ? false : fetchUsers();
});

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
