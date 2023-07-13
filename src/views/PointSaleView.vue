<script setup>
import OwnSale from '../components/point_sale/OwnSale.vue'
import { ref } from 'vue'
const ventas = ref(true)
</script>

<template>
  <div class="container-fluid">
    <div class="card mt-5">
      <div class="card-body p-0">
        <OwnSale v-if="ventas" />
      </div>
    </div>
  </div>
</template>
