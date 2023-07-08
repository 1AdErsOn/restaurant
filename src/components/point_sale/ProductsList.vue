<script setup>
import ProductCart from './ProductCart.vue'
import { ref } from 'vue'
const products = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
</script>

<template>
  <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <ProductCart v-for="product of products" :key="product"/>
  </div>
</template>
