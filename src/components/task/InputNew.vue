<script setup>
import { ref } from 'vue'

defineProps(['disabled'])
const task = ref('')
const input = ref(null)
const emit = defineEmits(['onNewTask'])
const handleSubmit = () => {
  if (task.value.trim().length === 0) {
    return
  }
  emit('onNewTask', task.value.trim())
  task.value = ''
  input.value.focus()
}
</script>
<template>
  <form @submit.prevent="handleSubmit" v-show="disabled">
    <div class="new py-2 pt-3">
      <input
        v-model="task"
        ref="input"
        type="text"
        class="form-control bg-white text-secondary fw-bold"
      />
    </div>
  </form>
</template>
