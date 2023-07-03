<script setup>
import Perfil from '../components/Perfil.vue'
</script>

<template>
  <div class="card mt-3">
    <div class="card-body">
      <Perfil :isAdmin="true" />
    </div>
  </div>
</template>
