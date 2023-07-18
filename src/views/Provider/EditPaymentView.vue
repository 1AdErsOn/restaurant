<script setup>
import OwnCard from '../../components/OwnCard.vue'
import OwnPayment from '../../components/supplier/OwnPayment.vue'
import { ref } from 'vue'
import router from '../../router'

const prop = defineProps({
  id: {
    required: true,
    type: String
  }
})
const edit = ref(false)
const fetchPayment = () => {
  if (prop.id == '0') {
    edit.value = true
  }
}
fetchPayment()
const handleCancel = () => {
  if (prop.id == '0') {
    router.back()
    return
  }
  edit.value = false
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-6" v-if="!edit">
        <OwnCard class="mt-3">
          <template #body>
            <h3>PCSH1/001</h3>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Tipo de Pago</th>
                  <td>Enviar</td>
                </tr>
                <tr>
                  <th scope="row">Proveedor</th>
                  <td>Rico Pollo</td>
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
            <button type="button" class="btn btn-outline-primary" @click="edit = true">
              Restablecer a Borrador
            </button>
          </template>
        </OwnCard>
      </div>
      <OwnPayment class="mt-3" :id-pay="parseInt(id)" @pay-cancel="handleCancel" v-else />
    </div>
  </div>
</template>
