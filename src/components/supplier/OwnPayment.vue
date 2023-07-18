<script setup>
import OwnCard from '../OwnCard.vue'
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
  <div class="col col-md-6">
    <OwnCard>
      <template #body>
        <h3>PCSH1/001</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Tipo de Pago</th>
              <td>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="typePay"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">Recibir</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="typePay"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">Enviar</label>
                </div>
              </td>
            </tr>
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
              <th scope="row">Metodo de Pago</th>
              <td>
                <select class="form-select form-select-sm">
                  <option selected>Efectivo</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">Importe</th>
              <td>
                <input class="form-control form-control-sm" type="number" placeholder="500" />
              </td>
            </tr>
            <tr>
              <th scope="row">Fecha</th>
              <td>
                <input class="form-control form-control-sm" type="date" placeholder="" />
              </td>
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
