<script setup>
import { ref } from 'vue'
import OwnLogin from '../components/auth/OwnLogin.vue'
import OwnRegister from '../components/auth/OwnRegister.vue'

const login = ref(true)
const register = ref(false)

const toggle = (value) => {
  login.value = value
  register.value = !value
}
</script>

<template>
  <div class="row justify-content-center mt-3">
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
          <OwnLogin :login="login" />
          <OwnRegister :register="register" />
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
