<script setup>
import { ref } from 'vue'

const prop = defineProps({
  linkData: {
    required: true,
    type: Object
  }
})
//const emit = defineEmits(['isNaved'])
const clicked = ref(prop.linkData.options)
/* const hancleClick = () => {
  clicked.value = true
  emit('isNaved', prop.linkData.id)
} */
</script>

<template>
  <li class="nav-item dropdown" @click="clicked = !clicked">
    <button class="btn btn-primary dropdown-toggle" type="button">
      {{ linkData.tittle }}
    </button>
    <ul class="dropdown-menu" :class="{show:clicked}">
      <li v-for="menu of linkData.subMenu" :key="menu.id">
        <RouterLink class="dropdown-item" :to="menu.url">
          {{ menu.tittle }}
        </RouterLink>
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
