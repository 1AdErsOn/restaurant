<script setup>
//import { ref } from 'vue'

defineProps({
  show: {
    required: true,
    type: Boolean
  }
})
const emit = defineEmits(['closeModal'])
const handleClose = () => {
  emit('closeModal')
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :class="{ show: show }"
    id="exampleModal"
    tabindex="-1"
    style="display: block"
    aria-modal="true"
    role="dialog"
    v-show="show"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">
            <slot name="tittle"></slot>
          </h1>
          <button type="button" class="btn-close" aria-label="Close" @click="handleClose"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
