<script setup>
import OwnTable from '../OwnTable.vue'
const emit = defineEmits(['updateProduct'])
const handleUpdate = (id) => {
  emit('updateProduct', id)
}
</script>

<template>
  <div class="col-xl-8">
    <h3>Productos</h3>
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
</template>