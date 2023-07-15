<script setup>
import OwnTable from '../OwnTable.vue'

const emit = defineEmits(['pointSale', 'closePointSale'])
const handleContinue = () => {
  console.log('cont')
  emit('pointSale')
}
const handleClosePoint = () => {
  emit('closePointSale')
}
</script>

<template>
  <div class="row">
    <div class="d-flex align-items-start justify-content-between">
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" />
      </div>
      <div class="d-flex">
        <button class="btn btn-outline-primary" type="button" @click="handleContinue">
          Point Sale
        </button>
      </div>
      <div class="d-flex">
        <button class="btn btn-outline-danger" type="button" @click="handleClosePoint">
          Close Point Sale
        </button>
      </div>
    </div>
    <OwnTable>
      <template #head>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cliente</th>
          <th scope="col">Correo</th>
          <th scope="col">Registro</th>
          <th scope="col">Rol User</th>
          <th scope="col">Estado</th>
        </tr>
      </template>
      <template #body> </template>
    </OwnTable>
  </div>
</template>
