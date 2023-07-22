<script setup>
import { ref, computed } from 'vue'
//import OwnProduct from '../../components/product/OwnProduct.vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnTable from '../../components/OwnTable.vue'

const showList = computed(() => {
  return picked.value == 'List' ? true : false
})
const picked = ref('List')

const list = ref(true)
</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
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
            <h3 class="me-2">Productos</h3>
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
        <OwnTable v-if="list">
          <template #head>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre del Producto</th>
              <th scope="col">Referencia Interna</th>
              <th scope="col">Responsable</th>
              <th scope="col">Precio</th>
              <th scope="col">Coste</th>
              <th scope="col">Categoria</th>
              <th scope="col">Tipo</th>
              <th scope="col">Cantidad</th>
            </tr>
          </template>
          <template #body>
            <tr>
              <th scope="row">check</th>
              <td>Pollo Entero</td>
              <td></td>
              <td>Aderson</td>
              <td>48</td>
              <td>0</td>
              <td>Platos</td>
              <td>Consumible</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="9"></td>
            </tr>
          </template>
        </OwnTable>
        <!--<OwnProduct />-->
      </template>
    </OwnCard>
  </div>
</template>
