<script setup>
import OwnPay from '../../components/pay/OwnPay.vue'
import { useRouter } from 'vue-router'

defineProps({
  id: {
    type: String,
    required: true
  }
})
const router = useRouter()
const handleCancel = () => {
  router.back()
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <OwnPay class="mt-3" :id-pay="parseInt(id)" @pay-cancel="handleCancel" />
    </div>
  </div>
</template>
