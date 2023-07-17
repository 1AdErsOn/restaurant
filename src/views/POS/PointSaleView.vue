<script setup>
import { ref } from 'vue'
import OwnSale from '../../components/point_sale/OwnSale.vue'

const sales = ref(false)
const pos = ref(false)
const handleStart = () => {
  //some fetch
  sales.value = true
  pos.value = true
}
//const idSession = ref(0)
</script>

<template>
  <div class="container-fluid">
    <div v-if="!sales || !pos" class="row justify-content-center align-items-start g-2 mt-5">
      <div class="col col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h1 class="d-flex">Punto de Venta</h1>
              <div class="btn-group-vertical" role="group">
                <button type="button" class="btn btn-outline-primary">Sessions</button>
                <button type="button" class="btn btn-outline-primary">Orders</button>
              </div>
            </div>
            <div class="row">
              <div class="col col-md-6">
                <button
                  v-if="!sales"
                  type="button"
                  class="btn btn-outline-success"
                  @click="handleStart"
                >
                  Nueva Session
                </button>
                <button v-else type="button" class="btn btn-outline-danger" @click="pos = true">
                  Continuar Venta
                </button>
              </div>
              <div class="col col-md-6">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row" colspan="2">Aderson</th>
                    </tr>
                    <tr>
                      <th scope="row">Ultima Fecha de Cierre</th>
                      <td>last date</td>
                    </tr>
                    <tr>
                      <th scope="row">Ultimo Balance Efectivo</th>
                      <td>Money</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="card mt-5">
      <div class="card-body">
        <OwnSale @show-orders="pos = false" />
      </div>
    </div>
  </div>
</template>
