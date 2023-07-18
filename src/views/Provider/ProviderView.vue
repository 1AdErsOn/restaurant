<script setup>
import { ref } from 'vue'
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnSupplier from '../../components/supplier/OwnSupplier.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const nuevo = ref(false)
const handleEdit = (idProvider = 0) => {
  router.push(`/provider/${idProvider}`)
}
const fetchProviders = () => {
  nuevo.value = false
  console.log('fetch providers')
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-12" v-if="!nuevo">
        <OwnCard class="mt-3">
          <template #body>
            <div class="row">
              <div class="col col-md-7">
                <div class="d-flex align-items-start justify-content-between">
                  <button type="button" class="btn btn-outline-primary" @click="nuevo = true">
                    Nuevo
                  </button>
                  <h3 class="d-flex me-2">Proveedores</h3>
                  <div class="d-flex">
                    <input class="form-control" type="search" placeholder="Search" />
                  </div>
                </div>
                <OwnTable>
                  <template #head>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Direccion</th>
                      <th scope="col">Contactar A</th>
                      <th scope="col"># de Contacto</th>
                    </tr>
                  </template>
                  <template #body>
                    <tr>
                      <td>Rico Pollo</td>
                      <td>Por ahi</td>
                      <td>Alguien</td>
                      <td>987654321</td>
                    </tr>
                    <tr>
                      <td colspan="6"></td>
                    </tr>
                  </template>
                </OwnTable>
              </div>
              <div class="col col-md-5">
                <OwnCard>
                  <template #body>
                    <h3>Rico Pollo</h3>
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Direccion</th>
                          <td>Via de Evitamiento 123</td>
                        </tr>
                        <tr>
                          <th scope="row">Numero de Identificacion</th>
                          <td>RUC 20601803861</td>
                        </tr>
                        <tr>
                          <th scope="row">Contactar A</th>
                          <td>Aderson</td>
                        </tr>
                        <tr>
                          <th scope="row">Movil</th>
                          <td>987654321</td>
                        </tr>
                        <tr>
                          <th scope="row">Correo Electronico</th>
                          <td>some@gmail.com</td>
                        </tr>
                        <tr>
                          <th scope="row">Compra</th>
                          <td>Pago Inmediato</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-primary" @click="handleEdit(5)">
                        Editar
                      </button>
                      <button type="button" class="btn btn-outline-danger">Borrar</button>
                    </div>
                  </template>
                </OwnCard>
              </div>
            </div>
          </template>
        </OwnCard>
      </div>
      <OwnSupplier
        class="mt-3"
        @provider-cancel="nuevo = false"
        @new-provider="fetchProviders"
        v-else
      />
    </div>
  </div>
</template>
