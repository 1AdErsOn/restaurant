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
              <h3 class="d-flex me-2">Pagos</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Metodo de Pago</th>
                  <th scope="col">Orden</th>
                  <th scope="col">Importe</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>date</td>
                  <td>Efectivo</td>
                  <td>Shop/0001</td>
                  <td>500</td>
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
                      <th scope="row">Importe</th>
                      <td>500</td>
                    </tr>
                    <tr>
                      <th scope="row">Orden</th>
                      <td>Shop/0001</td>
                    </tr>
                    <tr>
                      <th scope="row">Metodo de Pago</th>
                      <td>Efectivo</td>
                    </tr>
                    <tr>
                      <th scope="row">Session</th>
                      <td>POS/0003</td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary">Session</button>
                  <button type="button" class="btn btn-outline-primary">Orden</button>
                </div>
              </template>
            </OwnCard>
          </div>
        </div>
      </template>
    </OwnCard>
  </div>
</template>
