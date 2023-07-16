<script setup>
import OwnTable from '../components/OwnTable.vue'
//import OwnDaily from '../components/daily/OwnDaily.vue'
//import OwnOrder from '../components/daily/OwnOrder.vue'
</script>

<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col col-md-8">
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Id. de Session</th>
                  <th scope="col">Abierto Por</th>
                  <th scope="col">Fecha de Apertura</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>POS/0001</td>
                  <td>Aderson</td>
                  <td>date</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Cerrado</span>
                  </td>
                </tr>
              </template>
            </OwnTable>
          </div>
          <div class="col col-md-4">
            <div class="card">
              <div class="card-body">
                <h3>POS/0001</h3>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Abierto por</th>
                      <td>Aderson</td>
                    </tr>
                    <tr>
                      <th scope="row">Fecha de Apertura</th>
                      <td>last date</td>
                    </tr>
                    <tr>
                      <th scope="row">Saldo inicial</th>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">Saldo final</th>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary">Pedidos</button>
                  <button type="button" class="btn btn-outline-primary">Pagos</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <OwnOrder
          v-if="orders"
          @point-sale="sales = true"
          @close-point-sale="orders = false"
        />
        <OwnDaily v-else @start-point-sale="sales = true" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
