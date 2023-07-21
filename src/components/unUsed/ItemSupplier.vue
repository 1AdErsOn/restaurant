<script setup>
import { ref } from 'vue'

const edit = ref(false)
</script>

<template>
  <tr v-if="!edit">
    <th scope="row">1</th>
    <td>Rico Pollo</td>
    <td>Por Ahi</td>
    <td>Alguien</td>
    <td>987654321</td>
    <td>
      <span class="badge rounded-pill text-bg-light">Admin</span>
    </td>
    <td>
      <button class="btn btn-outline-success" @click="edit = true">Edit</button>
    </td>
  </tr>
  <tr v-else>
    <td colspan="7">
      <div class="input-group">
        <span class="input-group-text">1</span>
        <input type="text" class="form-control" placeholder="Nombre" />
        <input type="text" class="form-control" placeholder="Direccion" />
        <input type="text" class="form-control" placeholder="Contactar A" />
        <input type="number" class="form-control" placeholder="# de Contacto" />
        <select class="form-select">
          <option selected>Estado</option>
          <option value="1">Activo</option>
          <option value="2">Inactivo</option>
        </select>
        <button class="btn btn-outline-primary" @click="edit = false">Actualizar</button>
      </div>
    </td>
  </tr>
</template>
