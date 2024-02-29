<template>
  <section class="flex justify-center items-center">
    <div v-if="filterProducts.length === 0" class="text-center py-10"><h3 class="text-base">Loading Products...</h3></div>
    <div class="container pt-6" v-else>
      <ProductSearch />>
      <ProductList v-bind:products="filterProducts" />
    </div>
  </section>
</template>

<script setup>
  import { onMounted,  } from 'vue';
  import { storeToRefs } from 'pinia';
  import ProductList from '@/components/meli/ProductsLis.vue';
  import ProductSearch from '@/components/meli/ProductSearch.vue';
  import { useProductsStore } from '@/stores/products';

  const productsStore = useProductsStore();
  const { filterProducts } = storeToRefs(productsStore);
  const { getProductList } = productsStore;

  onMounted(async () => {
    console.log('Getting products...')
    getProductList();
    console.log('Products:', filterProducts);
  });

</script>