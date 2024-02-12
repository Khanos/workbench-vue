
<template>
  <main class="users-container">
    <h1>Hello from users</h1>
    <p v-if="loading">Loading users...</p>
    <table v-else class="users">
      <thead>
        <tr>
          <th><span>Id</span> <FilterButton id="id" /></th>
          <th><span>Name</span> <FilterButton id="name" /></th>
          <th><span>Email</span> <FilterButton id="email" /></th>
          <th><span>Phone</span> <FilterButton id="phone" /></th>
          <th><span>Website</span> <FilterButton id="website" /></th>
          <th><span>Address</span> <FilterButton id="address" /></th>
          <th><span>Company</span> <FilterButton id="company" /></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="id">
            {{ user.id }}
          </td>
          <td class="user">
            {{ user.name }}
          </td>
          <td class="email">
            {{ user.email }}
          </td>
          <td class="phone">
            {{ user.phone }}
          </td>
          <td class="website">
            {{ user.website }}
          </td>
          <td class="address">
            {{ user.address.street }}
          </td>
          <td class="company">
            {{ user.company.name.substring(0, 20)}}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="error">Ups something bad happens ⚠</p>
  </main>
</template>

<script setup>
import { useFetch } from '../utils/useFetch';
import FilterButton from '../components/FilterButton.vue';
import { useUsersStore } from '@/stores/users';
import { storeToRefs } from 'pinia'
import { watch } from 'vue';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);
const { setUsers } = usersStore;

const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users', {
  simulateDelay: false,
  simulateError: false,
  cache: true,
});

if(data.value && data.value.length > 0) setUsers(data.value);
watch(data, (newData) => {
  if(newData && newData.length > 0) setUsers(newData);
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
  .users th {
    padding: 10px;
    font-weight: bolder;
    text-align: left;
  }
  .users td {
    padding: 10px;
  }
</style>
