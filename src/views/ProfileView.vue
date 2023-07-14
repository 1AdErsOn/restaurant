<script setup>
import OwnProfile from '../components/auth/OwnProfile.vue'
</script>

<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <OwnProfile :isAdmin="true" />
      </div>
    </div>
  </div>
</template>
