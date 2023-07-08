<script setup>
import { ref } from 'vue'
defineProps({
  isUser: {
    required: true,
    type: Boolean,
    default: false
  },
  loged: {
    required: true,
    type: Boolean,
    default: true
  },
  menu: {
    required: false,
    type: Boolean,
    default: true
  }
})
const ismenu = ref(true)
const options = ref(false)
</script>

<template>
  <nav class="navbar bg-primary border-bottom border-bottom-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">La Gran Parada</span>
      <div v-show="menu && ismenu">
        <ul v-if="loged" class="nav justify-content-center nav-underline mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/user">Users</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/point-sale"
              >Punto de Venta</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <ul v-else class="nav mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <RouterLink class="btn btn-outline-light" aria-current="page" to="/auth"
              >START</RouterLink
            >
          </li>
        </ul>
      </div>
      <div v-show="isUser" class="dropdown">
        <button type="button" class="btn btn-primary">Action</button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          @click="options = !options"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" :class="{ show: options }">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><div class="dropdown-divider"></div></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        @click="menu = !menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
