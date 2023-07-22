<script setup>
import OwnTable from '../OwnTable.vue'
import AddProduct from './AddProduct.vue'
import UpdateProduct from './UpdateProduct.vue'
import { ref } from 'vue'

const identy = ref(false)
const handleUpdate = (id = '') => {
  identy.value = true
  console.log('Get id: ' + id)
}
</script>

<template>
  <div class="row">
    <div class="col-xl-8">
      <h3>Productos</h3>
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <select class="d-flex form-select" id="filter">
            <option selected>Filtro</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="d-flex">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        </div>
      </div>
      <OwnTable>
        <template #head>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
            <th scope="col">Operaciones</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <th scope="row">1</th>
            <td>Pollo 1/4</td>
            <td>Consumible</td>
            <td>$/12.00</td>
            <td>Platos</td>
            <td>
              <button class="btn btn-outline-info" @click="handleUpdate('id')">Edit</button>
              <button class="btn btn-outline-success">Abilit</button>
            </td>
          </tr>
        </template>
      </OwnTable>
    </div>
    <AddProduct />
    <UpdateProduct :identy="identy" @close-modal="identy = false" />
  </div>
</template>
