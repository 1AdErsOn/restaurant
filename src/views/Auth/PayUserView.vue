<script setup>
import { ref } from 'vue'
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnPay from '../../components/pay/OwnPay.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const nuevo = ref(false)
const handleEdit = (idPay = 0) => {
  router.push(`/pay-user/${idPay}`)
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-12" v-if="!nuevo">
        <OwnCard class="mt-3">
          <template #body>
            <div class="row">
              <div class="col col-md-8">
                <div class="d-flex align-items-start justify-content-between">
                  <button type="button" class="btn btn-outline-primary" @click="nuevo = true">
                    Nuevo
                  </button>
                  <h3 class="d-flex me-2">Pagos</h3>
                  <div class="d-flex">
                    <input class="form-control" type="search" placeholder="Search" />
                  </div>
                </div>
                <OwnTable>
                  <template #head>
                    <tr>
                      <th scope="col">Fecha</th>
                      <th scope="col">Numero</th>
                      <th scope="col">Metodo de Pago</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Importe</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </template>
                  <template #body>
                    <tr>
                      <td>date</td>
                      <td>PCSH1/001</td>
                      <td>Efectivo</td>
                      <td>Aderson</td>
                      <td>5000</td>
                      <td>
                        <span class="badge rounded-pill text-bg-info">Publicado</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="6"></td>
                    </tr>
                  </template>
                </OwnTable>
              </div>
              <div class="col col-md-4">
                <OwnCard>
                  <template #body>
                    <h3>PCSH1/001</h3>
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Tipo de Pago</th>
                          <td>Enviar</td>
                        </tr>
                        <tr>
                          <th scope="row">Usuario</th>
                          <td>Aderson</td>
                        </tr>
                        <tr>
                          <th scope="row">Metodo de Pago</th>
                          <td>Efectivo</td>
                        </tr>
                        <tr>
                          <th scope="row">Importe</th>
                          <td>500</td>
                        </tr>
                        <tr>
                          <th scope="row">Fecha</th>
                          <td>date</td>
                        </tr>
                        <tr>
                          <th scope="row">Circular</th>
                          <td>
                            <input
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="Pago por Servicio"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="button" class="btn btn-outline-primary" @click="handleEdit(5)">
                      Restablecer a Borrador
                    </button>
                  </template>
                </OwnCard>
              </div>
            </div>
          </template>
        </OwnCard>
      </div>
      <OwnPay class="mt-3" @pay-cancel="nuevo = false" v-else />
    </div>
  </div>
</template>
