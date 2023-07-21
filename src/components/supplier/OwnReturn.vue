<script setup>
import OwnCard from '../OwnCard.vue'
import ItemReturn from './ItemReturn.vue'

const prop = defineProps({
  idPay: {
    required: false,
    type: Number,
    default: 0
  },
  currentPay: {
    required: false,
    type: Object
  }
})
const emit = defineEmits(['payCancel', 'newPay'])
const handleCancel = () => {
  emit('payCancel')
}
const handleConfirm = () => {
  emit('newPay')
}
const fetchPay = () => {
  if (prop.idPay !== 0) {
    console.log('log pay')
  }
}
fetchPay()
</script>

<template>
  <div class="col col-md-8">
    <OwnCard class="mt-3">
      <template #body>
        <p>Nota de credito del Proveedor</p>
        <h3>
          <input class="form-control form-control-lg" type="text" placeholder="Borrador" />
        </h3>
        <div class="row">
          <div class="co col-md-6">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Proveedor</th>
                  <td>
                    <select class="form-select form-select-sm">
                      <option selected>Rico Pollo</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Referencia</th>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Boleta N:"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="co col-md-6">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Fecha</th>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Referencia</th>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Pago: ..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ItemReturn :mode-edit="true" />
          <div class="col col-md-8"></div>
          <div class="col col-md-4">
            <table class="table table-bordered border-primary">
              <tbody>
                <tr>
                  <th scope="row">Descuento</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">Total</th>
                  <td>96</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-primary" @click="handleConfirm">
            Confirmar
          </button>
          <button type="button" class="btn btn-outline-warning" @click="handleCancel">
            Cancelar
          </button>
        </div>
      </template>
    </OwnCard>
  </div>
</template>
