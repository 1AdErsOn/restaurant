<script setup>
import { ref } from 'vue'
import ItemNavbar from './ItemNavbar.vue'
import MenuItems from '../mocks/menu.js'
const props = defineProps({
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
const collapsed = ref(props.menu)
const ismenu = ref(true)
const options = ref(false)
/* const handleNavigation = (idLink = 0) => {
  console.log(idLink);
  MenuItems.forEach(item => {
    if (item.id === idLink) {
      item.active = true
    } else {
      if (item.active) {
        item.active = false
      }
    }
  })
} */
</script>

<template>
  <nav class="navbar bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand mb-0 h1" aria-current="page" to="/"
        >La Gran Parada</RouterLink
      >
      <div
        class="collapse navbar-collapse"
        :class="{ show: collapsed }"
        v-show="collapsed && ismenu"
      >
        <ul v-if="loged" class="nav justify-content-center nav-underline mb-2 mb-lg-0">
          <template v-for="item of MenuItems" :key="item.id">
            <ItemNavbar :link-data="item" />
          </template>
        </ul>
        <ul v-else class="nav justify-content-center mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <RouterLink class="btn btn-outline-light" aria-current="page" to="/auth"
              >START</RouterLink
            >
          </li>
        </ul>
      </div>
      <div v-show="isUser" class="dropdown">
        <button type="button" class="btn btn-primary">Aderson</button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          @click="options = !options"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" :class="{ show: options }">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Cuenta de Perfil</a></li>
          <li><div class="dropdown-divider"></div></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        @click="collapsed = !collapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
