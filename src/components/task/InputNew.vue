<script setup>
import { ref } from 'vue'

defineProps(['disabled']) //['idBoard']
const task = ref('')
//const task_category = ref(null)
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
        class="form-control bg-white text-secondary fw-bold mb-1"
      />
      <!-- <input type="radio" class="btn-check" name="category" :id="idBoard + 'p'" value="pers" v-model="task_category"/>
      <label class="btn btn-outline-primary me-1" :for="idBoard + 'p'">Personal</label>
      <input type="radio" class="btn-check" name="category" :id="idBoard + 'b'" value="busi" v-model="task_category"/>
      <label class="btn btn-outline-info" :for="idBoard + 'b'">Negocio</label> -->
    </div>
  </form>
</template>
