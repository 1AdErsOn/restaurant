<script setup>
import { ref, reactive } from 'vue'
import Alert from '../components/Alert.vue'

const login = ref(true)
const register = ref(false)
const alert = reactive({
  message: '',
  variant: '',
  show: true
})
const toggle = (value) => {
  login.value = value
  register.value = !value
}
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
</script>

<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card">
        <nav class="menu">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link" :class="{ active: login }" @click="toggle(true)">LOGIN</button>
            <button class="nav-link" :class="{ active: register }" @click="toggle(false)">
              REGISTER
            </button>
          </div>
        </nav>
        <div class="card-body">
          <Alert :show="alert.show" :message="alert.message" />
          <form method="POST" v-show="login">
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
          <form method="POST" v-show="register">
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
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 10px;
}
</style>
