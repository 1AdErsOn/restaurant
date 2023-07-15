<script setup>
import { alertPropColor, useAlertColor } from '../composables/alertColor'

const props = defineProps({
  message: String,
  show: Boolean,
  ...alertPropColor
})
defineEmits(['closeAlert'])
const style = useAlertColor(props)
</script>

<template>
  <div class="alert alert-dismissible" :class="style" role="alert" v-show="show">
    <strong>{{ message }}</strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      @click="$emit('closeAlert')"
    ></button>
  </div>
</template>

<style scoped></style>
