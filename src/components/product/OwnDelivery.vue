<script setup>
import OwnCard from '../OwnCard.vue'
import OwnTable from '../OwnTable.vue'
</script>

<template>
  <div class="row mt-3">
    <div class="col col-md-6">
      <OwnCard>
        <template #body>
          <h3></h3>
          <div class="row">
            <div class="col col-md-6">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Direcion de Entrega</th>
                    <td>
                      <select class="form-select form-select-sm">
                        <option selected>Cliente</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tipo de Operacion</th>
                    <td>
                      <select class="form-select form-select-sm">
                        <option selected>Orden de Entrega</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col col-md-6">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Fecha</th>
                    <td>
                      <input class="form-control form-control-sm" type="date" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Documento Origen</th>
                    <td>
                      <input class="form-control form-control-sm" type="text" placeholder="Salida" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h5>Operaciones</h5>
          <OwnTable>
            <template #head>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Demanda</th>
                <th scope="col">Hecho</th>
              </tr>
            </template>
            <template #body>
              <tr>
                <td>
                  <select class="form-select form-select-sm">
                    <option selected>Pollo</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </td>
                <td>
                  <input class="form-control form-control-sm" type="number" placeholder="1" />
                </td>
                <td>
                  <input class="form-control form-control-sm" type="number" placeholder="1" />
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="
                      --bs-btn-padding-y: 0.25rem;
                      --bs-btn-padding-x: 0.5rem;
                      --bs-btn-font-size: 0.75rem;
                    "
                  >
                    Add One
                  </button>
                </td>
              </tr>
              <tr><td colspan="3"></td></tr>
            </template>
          </OwnTable>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-primary" @click="handleEdit(5)">
              Validar
            </button>
            <button type="button" class="btn btn-outline-danger">Cancelar</button>
          </div>
        </template>
      </OwnCard>
    </div>
  </div>
</template>
