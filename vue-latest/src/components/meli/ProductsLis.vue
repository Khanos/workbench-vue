<template>
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
      <li v-for="{id, thumbnail, title, price, currency_id: currencyId} in products"  :key="id">
        <img 
          :src="thumbnail" 
          :alt="title" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <h3 class="py-2">{{ title }}</h3>
        <strong>{{price.toLocaleString("es-ar", {
          style: "currency",
          currency: currencyId,
        })}}</strong>
      </li>
  </ul>
</template>

<script setup>  
defineProps({
  products:{
    type: Array,
    required: true
  }
})
</script>