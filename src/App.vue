<script setup>
import OwnNavbar from './components/OwnNavbar.vue'
import OwnFooter from './components/OwnFooter.vue'
import { ref } from 'vue'
const userMenu = ref(true)
const loged = ref(true)
</script>

<template>
  <OwnNavbar :isUser="userMenu" :loged="loged" />

  <!-- Content here -->
  <main>
    <RouterView />
  </main>

  <OwnFooter />
</template>

<style scoped></style>
