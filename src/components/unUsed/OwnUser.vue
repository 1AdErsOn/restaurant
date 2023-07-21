<script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import OwnTable from '../OwnTable.vue'
import OwnCard from '../OwnCard.vue'
const alert = reactive({
  message: 'Users',
  variant: 'success',
  show: true
})
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
const handleView = (idUser = 0) => {
  showAlert('user not found', 'danger')
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
        <OwnAlert
          class="mb-0"
          :show="alert.show"
          :variant="alert.variant"
          :message="alert.message"
          @close-alert="alert.show = false"
        />
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-primary" type="button" @click="$router.push('/register')">
            Crear
          </button>
        </div>
      </div>
      <OwnTable>
        <template #head>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correo</th>
            <th scope="col">Registro</th>
            <th scope="col">Rol User</th>
            <th scope="col">Estado</th>
          </tr>
        </template>
        <template #body>
          <tr @click="handleView">
            <th scope="row">1</th>
            <td>Aderson Vilca</td>
            <td>1java2scrip3@gmail.com</td>
            <td>in any moment</td>
            <td>
              <span class="badge rounded-pill text-bg-light">Admin</span>
            </td>
            <td>
              <span class="badge rounded-pill text-bg-info">Active</span>
            </td>
          </tr>
        </template>
      </OwnTable>
    </div>
    <div class="col-xl-4">
      <OwnCard>
        <template #head>Informacion del Usuario</template>
        <template #body>
          <ol class="list-group list-group-numbered mb-3">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
          <div class="btn-toolbar" role="toolbar">
            <div class="btn-group me-2" role="group">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="active"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-primary" for="active">Active</label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="inactive"
                autocomplete="off"
              />
              <label class="btn btn-outline-danger" for="inactive">Inactive</label>
            </div>
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn btn-outline-success"
                @click="$router.push('/profile')"
              >
                Edit
              </button>
            </div>
          </div>
        </template>
      </OwnCard>
    </div>
  </div>
</template>

<style scoped></style>
