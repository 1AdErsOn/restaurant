<script setup>
import OwnSupplier from '../../components/supplier/OwnSupplier.vue'
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
      <OwnSupplier
        class="mt-3"
        :id-pro="parseInt(id)"
        @provider-cancel="handleCancel"
        @new-provider="handleCancel"
      />
    </div>
  </div>
</template>
