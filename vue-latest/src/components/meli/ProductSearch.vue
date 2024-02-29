<template>
  <div class="container flex justify-center pb-6">
    <input class="rounded text-black px-2" type="text" name="search" id="search" v-model="searchValue" @input="searchhandler">
    <button @click="searchhandler" type="button" class="bg-gradient-to-r from-cyan-500 to-blue-500 px-2 mx-2 text-white rounded">Search</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '@/stores/products';
const productsStore = useProductsStore();
const { searchValue } = storeToRefs(productsStore);
const { setFilterProducts } = productsStore;

const searchhandler = () => {
  setFilterProducts(searchValue.value);
}

</script>