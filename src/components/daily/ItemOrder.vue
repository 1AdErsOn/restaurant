<script setup>
import OwnTable from '../OwnTable.vue'
</script>

<template>
  <div class="row">
    <div class="d-flex align-items-start justify-content-between">
      <div class="d-flex">
        <select class="d-flex form-select" id="filter">
          <option selected>Filtro</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary" type="button" @click="$router.push('/register')">
          Crear
        </button>
      </div>
    </div>
    <OwnTable>
      <template #head> </template>
      <template #body> </template>
    </OwnTable>
  </div>
</template>
