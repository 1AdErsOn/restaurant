<script setup>
import { ref } from 'vue'
import OwnTable from '../../components/OwnTable.vue'
import OwnCard from '../../components/OwnCard.vue'
const list = ref(true)
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col col-md-12" v-if="list">
        <OwnCard>
          <template #body>
            <div class="d-flex align-items-start justify-content-between">
              <div class="btn-group" role="group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
                <label class="btn btn-outline-info" for="btnradio1">Grid</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
                <label class="btn btn-outline-info" for="btnradio2">Lista</label>

              </div>
              <div class="d-flex">
                <h3 class="me-2">Pagos</h3>
                <input class="form-control" type="search" placeholder="Search" />
              </div>
              <button type="button" class="btn btn-outline-primary">Nuevo</button>
            </div>
            <OwnTable>
              <template #head>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Numero</th>
                  <th scope="col">Libro Diario</th>
                  <th scope="col">Metodo de Pago</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Importe</th>
                  <th scope="col">Estado</th>
                </tr>
              </template>
              <template #body>
                <tr>
                  <td scope="row">check</td>
                  <td>date</td>
                  <td>Somthing</td>
                  <td>Efectivo</td>
                  <td>Manual</td>
                  <td>Aderson</td>
                  <td>1999</td>
                  <td>
                    <span class="badge rounded-pill text-bg-info">Publicado</span>
                  </td>
                </tr>
                <tr><td colspan="8"></td></tr>
              </template>
            </OwnTable>
          </template>
        </OwnCard>
      </div>
      <div class="col col-md-8" v-else>
        <!-- <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
            <img src="Image Source" class="img-fluid rounded-start" alt="Card title">
            </div>
            <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>