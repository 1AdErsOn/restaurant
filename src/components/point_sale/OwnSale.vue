<script setup>
import { ref } from 'vue'
import Ownfilter from '../OwnList.vue'
import OwnSystem from './OwnSystem.vue'

const emit = defineEmits(['showOrders'])
const search = ref('')
const handleSearch = () => {
  console.log(search.value)
}
const handleShowOrder = () => {
  //validation close
  emit('showOrders')
}
</script>

<template>
  <div class="d-flex">
    <!-- Sidebar-->
    <div class="border-end">
      <div class="h5 border-bottom p-2">Categorias:</div>
      <Ownfilter />
    </div>
    <!-- Page content wrapper-->
    <div>
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container-fluid">
          <div class="d-flex" role="search">
            <input
              v-model="search"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              @keyup="handleSearch"
            />
          </div>
          <button class="btn btn-outline-primary" type="button" @click="handleShowOrder">
            Ventas
          </button>
        </div>
      </nav>
      <!-- Page content-->
      <div class="container-fluid">
        <OwnSystem />
      </div>
    </div>
  </div>
</template>
