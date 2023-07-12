<script setup>
import CompanyInfo from '../components/setting/CompanyInfo.vue';
import PrintInfo from '../components/setting/PrintInfo.vue';
import SystenInfo from '../components/setting/SystenInfo.vue';


</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-3">
      <div class="col-md-4">
        <CompanyInfo />
      </div>
      <div class="col-md-4">
        <PrintInfo />
      </div>
      <div class="col-md-4">
        <SystenInfo />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
