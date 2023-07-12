<script setup>
import OwnCard from '../OwnCard.vue'
import ItemCategory from './ItemCategory.vue'
</script>

<template>
  <OwnCard>
    <template #head> Categorias </template>
    <template #body>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Category Name" />
        <button class="btn btn-outline-primary" type="button">Add</button>
      </div>
      <ItemCategory
        ><!--for-->
        Platos
      </ItemCategory>
    </template>
  </OwnCard>
</template>
