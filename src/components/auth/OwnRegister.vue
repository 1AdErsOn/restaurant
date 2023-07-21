<script setup>
import { reactive } from 'vue'
import OwnAlert from '../OwnAlert.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const newUser = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confPass: ''
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
const handleRegister = async () => {
  if (
    newUser.name == '' ||
    newUser.email == '' ||
    newUser.password == '' ||
    newUser.confPass == ''
  ) {
    showAlert('Fill all the fields')
    return
  }
  router.push('/point-sale')
  //registerUser
  console.log(newUser)
}
</script>

<template>
  <form @submit.prevent="handleRegister">
    <OwnAlert
      :show="alert.show"
      :variant="alert.variant"
      :message="alert.message"
      @close-alert="alert.show = false"
    />
    <div class="mb-3 row">
      <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>
      <div class="col-md-6">
        <input v-model="newUser.firstName" id="name" type="text" class="form-control" name="name" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="name" class="col-md-4 col-form-label text-md-end">Last Name</label>
      <div class="col-md-6">
        <input v-model="newUser.lastName" id="name" type="text" class="form-control" name="name" />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="emailr" class="col-md-4 col-form-label text-md-end">Email</label>
      <div class="col-md-6">
        <input
          v-model="newUser.email"
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
          v-model="newUser.password"
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
          v-model="newUser.confPass"
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
