<script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import OwnTable from '../OwnTable.vue'
import ItemSupplier from './ItemSupplier.vue';
const alert = reactive({
  message: 'Users',
  variant: '',
  show: true
})
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
</script>

<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="d-flex align-items-start justify-content-between mb-3">
        <div class="d-flex">
          <select class="d-flex form-select" id="filter">
            <option selected>Filtro</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <OwnAlert class="mb-0" :show="alert.show" :message="alert.message" />
        <div class="d-flex">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <div class="input-group">
        <span class="input-group-text">Proveedor</span>
        <input type="text" class="form-control" placeholder="Nombre">
        <input type="text" class="form-control" placeholder="Direccion">
        <input type="text" class="form-control" placeholder="Contactar A">
        <input type="number" class="form-control" placeholder="# de Contacto">
        <select class="form-select">
          <option selected>Estado</option>
          <option value="1">Activo</option>
          <option value="2">Inactivo</option>
        </select>
        <button class="btn btn-outline-primary" type="button">Crear</button>
      </div>
      <OwnTable>
        <template #head>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Contactar A</th>
            <th scope="col"># de Contacto</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </template>
        <template #body>
          <ItemSupplier />
        </template>
      </OwnTable>
    </div>
    
  </div>
</template>

<style scoped></style>