<template>
  <button @click="handleSort" class="filter-button">{{ sortIcon }}</button>
</template>
  
<script setup>
import { computed } from 'vue';
import { useUsersStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

const usersStore = useUsersStore();
const { sortBy, setCurrentColumn } = usersStore;
const { order, currentColmn } = storeToRefs(usersStore);

const props = defineProps({
  id: {
    type: String,
    required: true
  },
});
const { id } = props;

const sortIcon = computed(() => {
  if(id !== currentColmn.value) return '-';
  return order.value === 'asc' ? '⬇' : '⬆';
});

const handleSort = () => {
  setCurrentColumn(id);
  order.value = order.value === 'desc' ? 'asc' : 'desc';
  sortBy(id, order.value);
}

</script>

<style lang="sass" scoped>
.filter-button
  background-color: #4CAF50
  border: none
  color: white
  padding: 1px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  cursor: pointer
  width: 20px
  &.active
    background-color: #45a049
</style>