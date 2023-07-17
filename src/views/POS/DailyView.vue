<script setup>
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
//import OwnDaily from '../components/daily/OwnDaily.vue'
//import OwnOrder from '../components/daily/OwnOrder.vue'
</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
      <template #body>
        <div class="row">
          <div class="col col-md-8">
            <div class="d-flex align-items-start justify-content-center">
              <h3 class="d-flex me-2">Session</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Id. de Session</th>
                  <th scope="col">Punto de Venta</th>
                  <th scope="col">Abierto Por</th>
                  <th scope="col">Fecha de Apertura</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>POS/0001</td>
                  <td>Shop</td>
                  <td>Aderson</td>
                  <td>date</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Cerrado</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                </tr>
              </template>
            </OwnTable>
          </div>
          <div class="col col-md-4">
            <OwnCard>
              <template #body>
                <h3>POS/0001</h3>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Abierto por</th>
                      <td>Aderson</td>
                    </tr>
                    <tr>
                      <th scope="row">Punto de Venta</th>
                      <td>Shop</td>
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
              </template>
            </OwnCard>
          </div>
        </div>
      </template>
    </OwnCard>
        
        <!-- <OwnOrder
          v-if="orders"
          @point-sale="sales = true"
          @close-point-sale="orders = false"
        />
        <OwnDaily v-else @start-point-sale="sales = true" /> -->
  </div>
</template>

<style scoped></style>
