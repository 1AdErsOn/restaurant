<script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const user = reactive({
  email: '',
  password: ''
})
const alert = reactive({
  message: '',
  variant: 'success',
  show: false
})
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
const getToken = async () => {
  await fetch('/api/login')
}
const handleLogin = async () => {
  if (user.email == '' || user.password == '') {
    showAlert('Todos los campos son requeridos')
    return
  }
  await getToken()
  router.push('/point-sale')
  //loginUser
  console.log(user)
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <OwnAlert
      :show="alert.show"
      :variant="alert.variant"
      :message="alert.message"
      @close-alert="alert.show = false"
    />
    <div class="mb-3 row">
      <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>
      <div class="col-md-6">
        <input
          v-model="user.email"
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
          v-model="user.password"
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
