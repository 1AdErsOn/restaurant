<script setup>
import { ref } from 'vue';

const props = defineProps({
  variant: {
    required: false,
    type: String,
    default: 'warning'
  },
  message: {
    required: true,
    type: String
  },
  show: {
    required: true,
    type: Boolean
  }
})
const isShow = ref(props.show)
</script>

<template>
  <div class="alert alert-warning alert-dismissible" role="alert" v-show="isShow">
    <strong>{{ message }}</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" @click="isShow = false"></button>
  </div>
</template>

<style scoped></style>
