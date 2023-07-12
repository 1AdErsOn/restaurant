<script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import OwnTable from '../OwnTable.vue'
import OwnCard from '../OwnCard.vue'
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
    <div class="col-xl-8">
      <div class="d-flex align-items-start justify-content-between">
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
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Crear</button>
        </div>
      </div>
      <OwnTable>
        <template #head>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol User</th>
            <th scope="col">Accion</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <th scope="row">1</th>
            <td>Aderson Vilca</td>
            <td>1java2scrip3@gmail.com</td>
            <td>
              <span class="badge rounded-pill text-bg-light">Admin</span>
            </td>
            <td>
              <button class="btn btn-outline-success" @click="$router.push('/profile')">Perfil</button>
            </td>
          </tr>
        </template>
      </OwnTable>
    </div>
    <div class="col-xl-4">
      <OwnCard>
        <template #head>Informacion del Usuario</template>
        <template #body>
          data
        </template>
      </OwnCard>
    </div>
  </div>
</template>

<style scoped></style>