<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'
const userMenu = ref(true)
const loged = ref(true)
</script>

<template>
  <Navbar :isUser="userMenu" :loged="loged" />

  <div class="container">
    <!-- Content here -->
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
