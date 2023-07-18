<script setup>
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
      <template #body>
        <div class="row">
          <div class="col col-md-8">
            <div class="d-flex align-items-start justify-content-center">
              <h3 class="d-flex me-2">Clientes</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Itentificacion</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>Aderson</td>
                  <td>java@gmail.com</td>
                  <td>70297440</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">New</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                </tr>
              </template>
            </OwnTable>
          </div>
          <div class="col col-md-4">
            <OwnCard>
              <template #body>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Nombres</th>
                      <td>
                        <fieldset disabled>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            placeholder="Aderson"
                          />
                        </fieldset>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Correo</th>
                      <td>
                        <fieldset disabled>
                          <input
                            type="email"
                            class="form-control form-control-sm"
                            placeholder="java@gmail.com"
                          />
                        </fieldset>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Itentificacion</th>
                      <td>
                        <fieldset disabled>
                          <input
                            type="number"
                            class="form-control form-control-sm"
                            placeholder="70297440"
                          />
                        </fieldset>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary">Edit</button>
                  <button type="button" class="btn btn-outline-primary">Save</button>
                </div>
              </template>
            </OwnCard>
          </div>
        </div>
      </template>
    </OwnCard>
  </div>
</template>
