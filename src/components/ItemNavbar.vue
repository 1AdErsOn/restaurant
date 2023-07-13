<script setup>
import { ref } from 'vue';

const prop = defineProps({
  linkData:{
    required: true,
    type: Object,
  }
})
//const emit = defineEmits(['isNaved'])
const clicked = ref(prop.linkData.active)
/* const hancleClick = () => {
  clicked.value = true
  emit('isNaved', prop.linkData.id)
} */
</script>

<template>
  <li class="nav-item" @click="clicked = true">
    <RouterLink class="nav-link fw-bold" :class="{active:clicked}" :to="linkData.url">{{ linkData.tittle }}</RouterLink>
  </li>
</template>

<style scoped>
</style>