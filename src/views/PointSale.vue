<script setup>
import PuntoVenta from '../components/PuntoVenta.vue'
import { ref } from 'vue'
const ventas = ref(true)
</script>

<template>
  <div class="card mt-5">
    <div class="card-body">
      <PuntoVenta v-if="ventas" />
    </div>
  </div>
</template>
