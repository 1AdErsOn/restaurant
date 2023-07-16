<script setup>
//import { onMounted, ref } from 'vue'
import OwnTable from '../OwnTable.vue'
//import { useRoute } from 'vue-router'

//const emit = defineEmits(['pointSale', 'closePointSale'])
/* const isLoading = ref(true)
const ruote = useRoute() */

/* onMounted(async () => {
  //fetch order by route.params.id
  console.log(ruote.params.id)
  isLoading.value = false
}) */
/* const handleContinue = () => {
  console.log('cont')
  emit('pointSale')
}
const handleClosePoint = () => {
  emit('closePointSale')
} */
</script>

<template>
  <div class="col col-md-12">
    <!-- <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pago</a>
        </li>
      </ul> -->
    <h5>Productos</h5>
    <OwnTable>
      <template #head>
        <tr>
          <th scope="col">Nombre del Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Coste</th>
          <th scope="col">Margen</th>
          <th scope="col">Subtotal</th>
        </tr>
      </template>
      <template #body>
        <tr>
          <td>Pollo Entero</td>
          <td>2</td>
          <td>48</td>
          <td>0</td>
          <td>96</td>
          <td>96</td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
      </template>
    </OwnTable>
  </div>
</template>
