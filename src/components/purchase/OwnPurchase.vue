<script setup>
import OwnTable from '../OwnTable.vue'
</script>

<template>
  <div class="row">
    <div class="col-xl-6">
      <h3>Ordenes de Compra</h3>
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
            <th scope="col">Fecha de Creacion</th>
            <th scope="col">Codigo</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Producto</th>
            <th scope="col">Estado</th>
            <th scope="col">Accion</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <th scope="row">1</th>
            <td>Pollo 1/4</td>
            <td>Consumible</td>
            <td>$/12.00</td>
            <td>Platos</td>
            <td>Platos</td>
            <td>
              <button class="btn btn-outline-info" @click.prevent="">Edit</button>
              <button class="btn btn-outline-success">Abilit</button>
            </td>
          </tr>
        </template>
      </OwnTable>
    </div>
  </div>
</template>
