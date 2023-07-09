<script setup>
import { ref } from 'vue';
import AddProduct from '../components/product/AddProduct.vue';
import OwnProducts from '../components/product/OwnProducts.vue';
import UpdateProduct from '../components/product/UpdateProduct.vue';

const identy = ref(false)
const handleUpdate = (id = '') => {
  identy.value = !identy.value
  console.log('Get id: ' + id);
}
</script>

<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="row">
        <OwnProducts @update-product="handleUpdate"/>
        <AddProduct />
        <UpdateProduct :identy="identy"/>
      </div>
    </div>
  </div>
</template>
