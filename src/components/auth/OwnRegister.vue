<script setup>
import { reactive } from 'vue';
import OwnAlert from '../OwnAlert.vue'
defineProps({
  register:{
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
  <form method="POST" v-show="register">
    <OwnAlert :show="alert.show" :message="alert.message" />
    <div class="mb-3 row">
      <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>
      <div class="col-md-6">
        <input
          id="name"
          type="text"
          class="form-control"
          name="name"
          autocomplete="name"
          autofocus
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="emailr" class="col-md-4 col-form-label text-md-end">Email</label>
      <div class="col-md-6">
        <input
          id="emailr"
          type="email"
          class="form-control"
          name="email"
          autocomplete="email"
          autofocus
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="passwordr" class="col-md-4 col-form-label text-md-end">Password</label>
      <div class="col-md-6">
        <input
          id="passwordr"
          type="password"
          class="form-control"
          name="password"
          autocomplete="password"
          autofocus
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="passwordrv" class="col-md-4 col-form-label text-md-end">Confirm Password</label>
      <div class="col-md-6">
        <input
          id="passwordrv"
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