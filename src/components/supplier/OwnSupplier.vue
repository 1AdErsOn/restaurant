<script setup>
import OwnCard from '../OwnCard.vue'

const prop = defineProps({
  idPro: {
    required: false,
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['providerCancel', 'newProvider'])
const handleCancel = () => {
  emit('providerCancel')
}
const handleSave = () => {
  emit('newProvider')
}
const fetchPay = () => {
  if (prop.idPro !== 0) {
    console.log('log pay')
  }
}
fetchPay()
</script>

<template>
  <div class="col col-md-6">
    <OwnCard>
      <template #body>
        <input class="form-control form-control-lg" type="text" placeholder="Nombre" />
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Direccion</th>
              <td>
                <input class="form-control form-control-sm" type="text" placeholder="Por ahi" />
              </td>
            </tr>
            <tr>
              <th scope="row">Numero de Identificacion</th>
              <td>
                <div class="input-group input-group-sm">
                  <select class="form-select">
                    <option selected>DNI</option>
                    <option value="2">RUC</option>
                    <option value="3">OTHER</option>
                  </select>
                  <input
                    class="form-control form-control-sm"
                    type="number"
                    placeholder="87654321"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Contactar A</th>
              <td>
                <input class="form-control form-control-sm" type="text" placeholder="Aderson" />
              </td>
            </tr>
            <tr>
              <th scope="row">Movil</th>
              <td>
                <input class="form-control form-control-sm" type="number" placeholder="987654321" />
              </td>
            </tr>
            <tr>
              <th scope="row">Correo Electronico</th>
              <td>
                <input
                  class="form-control form-control-sm"
                  type="email"
                  placeholder="java@gmail.com"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Compra</th>
              <td>
                <select class="form-select form-select-sm">
                  <option selected>Pago Inmediato</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-primary" @click="handleSave">Guardar</button>
          <button type="button" class="btn btn-outline-danger" @click="handleCancel">
            Cancelar
          </button>
        </div>
      </template>
    </OwnCard>
  </div>
</template>
<!-- <script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import OwnTable from '../OwnTable.vue'
import ItemSupplier from './ItemSupplier.vue'
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
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        </div>
      </div>
      <div class="input-group">
        <span class="input-group-text">Proveedor</span>
        <input type="text" class="form-control" placeholder="Nombre" />
        <input type="text" class="form-control" placeholder="Direccion" />
        <input type="text" class="form-control" placeholder="Contactar A" />
        <input type="number" class="form-control" placeholder="# de Contacto" />
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

<style scoped></style> -->
