<script setup>
import { ref } from 'vue'
import OwnSale from '../components/point_sale/OwnSale.vue'
import OwnDaily from '../components/daily/OwnDaily.vue'
import OwnOrder from '../components/daily/OwnOrder.vue'

const sales = ref(false)
const orders = ref(true)
//const idSession = ref(0)
</script>

<template>
  <div class="container-fluid">
    <div class="card mt-5">
      <div class="card-body">
        <OwnSale v-if="sales" @show-orders="sales = false" />
        <OwnOrder
          v-else-if="orders"
          @point-sale="sales = true"
          @close-point-sale="orders = false"
        />
        <OwnDaily v-else @start-point-sale="sales = true" />
      </div>
    </div>
  </div>
</template>
