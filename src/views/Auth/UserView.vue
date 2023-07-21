<script setup>
//import OwnUser from '../../components/supplier/OwnUser.vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnTable from '../../components/OwnTable.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClick = (idUser) => {
  router.push(`/profile/${idUser}`)
}
</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
      <template #body>
        <div class="row">
          <div class="col col-md-7">
            <div class="d-flex align-items-start justify-content-center">
              <h3 class="d-flex me-2">Usuarios</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Iniciar Session</th>
                  <th scope="col">Permiso</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>Aderson</td>
                  <td>java@gmail.com</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Administrador</span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Active</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                </tr>
              </template>
            </OwnTable>
          </div>
          <div class="col col-md-5">
            <OwnCard>
              <template #body>
                <div class="row">
                  <div class="col col-md-6">
                    <h5 class="card-title">Nombres</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Aderson</h6>
                    <h5 class="card-title">Correo</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Java@gmail.com</h6>
                  </div>
                  <div class="col col-md-6">
                    <!-- Form Group (Roles)-->
                    <div class="mb-2">
                      <label class="small mb-1">Role</label>
                      <select class="form-select form-select-sm">
                        <option value="">Select a role:</option>
                        <option value="admin">Administrator</option>
                        <option value="user">Usuario</option>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label class="small me-3">Estado</label>
                      <div class="btn-group" role="group">
                        <input
                          type="radio"
                          class="btn-check"
                          name="estado"
                          id="btnradio1"
                          checked
                        />
                        <label class="btn btn-outline-success" for="btnradio1">Active</label>

                        <input type="radio" class="btn-check" name="estado" id="btnradio2" />
                        <label class="btn btn-outline-danger" for="btnradio2">Inactive</label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-outline-primary" @click="handleClick(1)">
                  Edit
                </button>
              </template>
            </OwnCard>
          </div>
        </div>
      </template>
    </OwnCard>
  </div>
</template>
