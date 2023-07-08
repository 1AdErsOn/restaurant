<script setup>
import OwnNavbar from './components/OwnNavbar.vue'
import OwnFooter from './components/OwnFooter.vue'
import { ref } from 'vue'
const userMenu = ref(true)
const loged = ref(false)
</script>

<template>
  <OwnNavbar :isUser="userMenu" :loged="loged" />

  <div class="container">
    <!-- Content here -->
    <RouterView />
  </div>
  <OwnFooter />
</template>

<style scoped></style>
