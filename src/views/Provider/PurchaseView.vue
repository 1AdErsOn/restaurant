<script setup>
import { ref, computed } from 'vue'
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showList = computed(() => {
  return picked.value == 'List' ? true : false
})
const picked = ref('List')
const handleShow = (idPay = 0) => {
  router.push(`/purchase/${idPay}`)
}
const handleNew = () => {
  router.push('/purchase/0')
}
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col col-md-12">
        <OwnCard>
          <template #body>
            <div class="d-flex align-items-start justify-content-between">
              <div class="btn-group" role="group">
                <input
                  v-model="picked"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  value="Grid"
                />
                <label class="btn btn-outline-info" for="btnradio1">Grid</label>

                <input
                  v-model="picked"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  value="List"
                />
                <label class="btn btn-outline-info" for="btnradio2">Lista</label>
              </div>
              <div class="d-flex">
                <h3 class="me-2">Cuentas</h3>
                <input class="form-control" type="search" placeholder="Search" />
              </div>
              <button type="button" class="btn btn-outline-primary" @click="handleNew">
                Nuevo
              </button>
            </div>
            <div class="row row-cols-4 mt-3" v-if="!showList">
              <div class="col">
                <div class="card" style="max-width: 540px">
                  <div class="card-body">
                    <div class="d-flex justify-content-between g-0">
                      <div class="d-flex">
                        <h5 class="card-title">PCSH1/0001</h5>
                      </div>
                      <div class="d-flex">
                        <h5 class="card-title">Date</h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between g-0">
                      <div class="d-flex">
                        <p class="card-text">RICO POLLO</p>
                      </div>
                      <div class="d-flex">
                        <p class="card-text">100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">Column</div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </div>
            <OwnTable v-else>
              <template #head>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Numero</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Total</th>
                  <th scope="col">Importe Adeudado</th>
                  <th scope="col">Pago</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr @click="handleShow('1')">
                  <td scope="row">check</td>
                  <td>RBILL/0001</td>
                  <td>RICO POLLO</td>
                  <td>date</td>
                  <td>100</td>
                  <td>0</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Pagado</span>
                  </td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Publicado</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="8"></td>
                </tr>
              </template>
            </OwnTable>
          </template>
        </OwnCard>
      </div>
    </div>
  </div>
</template>
