<script setup>
import { reactive } from 'vue';
import Alert from '../Alert.vue'
defineProps({
  login:{
    required: true,
    type: Boolean,
    default: false
  }
})
const alert = reactive({
  message: '',
  variant: '',
  show: true
})
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
</script>

<template>
  <form method="POST" v-show="login">
    <Alert :show="alert.show" :message="alert.message" />
    <div class="mb-3 row">
      <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>
      <div class="col-md-6">
        <input
          id="email"
          type="email"
          class="form-control"
          name="email"
          autocomplete="email"
          autofocus
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
      <div class="col-md-6">
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          autocomplete="password"
          autofocus
        />
      </div>
    </div>

    <div class="mb-3 row">
      <div class="col-md-6 offset-md-4">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>