<script setup>
import { ref } from 'vue'
import OwnTable from '../components/OwnTable.vue'
import OwnCard from '../components/OwnCard.vue'
import DetailOrden from '../components/daily/DetailOrden.vue'

const details = ref(false)
/* const prop = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(() => {
  console.log(parseInt(prop.id))
}) */
</script>

<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col col-md-12" v-if="!details">
        <OwnCard>
          <template #body>
            <div class="d-flex align-items-start justify-content-center">
              <h3 class="d-flex me-2">Pedidos</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th>Ref. Venta</th>
                  <th>Fecha</th>
                  <th>Numero Pedido</th>
                  <th>Cliente</th>
                  <th>Cajero</th>
                  <th>Total</th>
                  <th>Estado</th>
                </tr>
              </template>
              <template #body>
                <tr @click="details = true">
                  <td>#</td>
                  <td>date</td>
                  <td>Pedido 0001-001</td>
                  <td>Aderson</td>
                  <td>Aderson</td>
                  <td>1230</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">pagado</span>
                  </td>
                </tr>
              </template>
            </OwnTable>
          </template>
        </OwnCard>
      </div>
      <div class="col col-md-8" v-else>
        <OwnCard>
          <template #body>
            <DetailOrden />
          </template>
        </OwnCard>
      </div>
    </div>
  </div>
</template>
