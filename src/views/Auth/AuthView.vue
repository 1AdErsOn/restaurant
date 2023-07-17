<script setup>
//import { ref } from 'vue'
import OwnLogin from '../../components/auth/OwnLogin.vue'
</script>

<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-md-6">
        <div class="card">
          <nav class="menu">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <div class="nav-link active">LOGIN</div>
            </div>
          </nav>
          <div class="card-body">
            <OwnLogin />
          </div>
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
