<script setup>
import { ref } from 'vue'
import OwnProducts from '../../components/product/OwnProducts.vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnTable from '../../components/OwnTable.vue'

const list = ref(true)
</script>

<template>
  <div class="container">
    <OwnCard class="mt-3">
      <template #body>
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
        <OwnProducts />
      </template>
    </OwnCard>
  </div>
</template>
