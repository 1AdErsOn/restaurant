<script setup>
import OwnTable from '../OwnTable.vue'
defineProps({
  modeEdit: {
    required: false,
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="col col-md-12" v-if="!modeEdit">
    <h5>Lineas de Recibo</h5>
    <OwnTable>
      <template #head>
        <tr>
          <th scope="col">Nombre del Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Descuento</th>
          <th scope="col">Subtotal</th>
        </tr>
      </template>
      <template #body>
        <tr>
          <td>Pan</td>
          <td>10</td>
          <td>0.5</td>
          <td>0</td>
          <td>5</td>
        </tr>
        <tr>
          <td colspan="5"></td>
        </tr>
      </template>
    </OwnTable>
  </div>
  <div class="col col-md-12" v-else>
    <h5>Lineas de Recibo</h5>
    <OwnTable>
      <template #head>
        <tr>
          <th scope="col">Nombre del Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Descuento</th>
          <th scope="col" colspan="2">Subtotal</th>
        </tr>
      </template>
      <template #body>
        <tr>
          <td>
            <select class="form-select form-select-sm">
              <option selected>Rico Pollo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </td>
          <td>
            <input type="number" class="form-control form-control-sm" placeholder="1" />
          </td>
          <td>10</td>
          <td>
            <input type="number" class="form-control form-control-sm" placeholder="0" />
          </td>
          <td>100</td>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm">R</button>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <button
              type="button"
              class="btn btn-primary"
              style="
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.75rem;
              "
            >
              Add One
            </button>
          </td>
        </tr>
      </template>
    </OwnTable>
  </div>
</template>
