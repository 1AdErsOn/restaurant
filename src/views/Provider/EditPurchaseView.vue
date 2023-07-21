<script setup>
import { ref } from 'vue'
import OwnCard from '../../components/OwnCard.vue'
import OwnPurchase from '../../components/purchase/OwnPurchase.vue'
import ItemPurchase from '../../components/purchase/ItemPurchase.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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
      <div class="col col-md-8" v-if="!edit">
        <OwnCard class="mt-3">
          <template #body>
            <p>Factura de proveedor</p>
            <h3>PCSH1/001</h3>
            <div class="row">
              <div class="co col-md-6">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Proveedor</th>
                      <td>Rico Pollo</td>
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
                      <td>date</td>
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
              <ItemPurchase :mode-edit="false" />
            </div>

            <button type="button" class="btn btn-outline-primary" @click="edit = true">
              Restablecer a Borrador
            </button>
          </template>
        </OwnCard>
      </div>
      <OwnPurchase class="mt-3" :id-pay="parseInt(id)" @pay-cancel="handleCancel" v-else />
    </div>
  </div>
</template>
