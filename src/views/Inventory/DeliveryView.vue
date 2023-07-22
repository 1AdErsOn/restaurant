<script setup>
//import { ref, computed } from 'vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnTable from '../../components/OwnTable.vue'
import OwnDelivery from '../../components/product/OwnDelivery.vue';

</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
      <template #body>
        <div class="row">
          <div class="col col-md-7">
            <div class="d-flex align-items-start justify-content-between">
              <button type="button" class="btn btn-outline-primary" @click="nuevo = true">
                Nuevo
              </button>
              <h3 class="d-flex me-2">Entregas</h3>
              <div class="d-flex">
                <input class="form-control" type="search" placeholder="Search" />
              </div>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">Referencia</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Origen</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td>WH/POS/0001</td>
                  <td>Aderson</td>
                  <td>POS</td>
                  <td>
                    <span class="badge rounded-pill text-bg-success">Hecho</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                </tr>
              </template>
            </OwnTable>
          </div>
          <div class="col col-md-5">
            <OwnCard >
              <template #body>
                <h3>WH/POS/0001</h3>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Direcion de Entrega</th>
                      <td>Aderson</td>
                    </tr>
                    <tr>
                      <th scope="row">Tipo de Operacion</th>
                      <td>Order</td>
                    </tr>
                    <tr>
                      <th scope="row">Fecha</th>
                      <td>date</td>
                    </tr>
                    <tr>
                      <th scope="row">Documento Origen</th>
                      <td>SHOP</td>
                    </tr>
                  </tbody>
                </table>
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
                      <td>Pollo Entero</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td colspan="3"></td>
                    </tr>
                  </template>
                </OwnTable>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary" @click="handleEdit(5)">
                    Desechar
                  </button>
                  <button type="button" class="btn btn-outline-danger">Desbloquear</button>
                </div>
              </template>
            </OwnCard>
          </div>
        </div> 
      </template>
    </OwnCard>
    <OwnDelivery />
  </div>
</template>
