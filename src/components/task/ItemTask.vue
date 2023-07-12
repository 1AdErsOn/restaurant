<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/taskStore.js'

const store = useTaskStore()
const { toggleTask, deleteTask, updateTask } = store
const props = defineProps({
  checked: Boolean,
  idBoard: String,
  idTask: String,
  tittle: String
})
const edit = ref(false)
const data = ref(props.tittle)
//const emit = defineEmits(['isChanged'])
const handleUpdate = () => {
  //console.log('changed')
  if (data.value !== '') {
    updateTask(props.idBoard, props.idTask, data.value)
    edit.value = false
  }
}
/* const handleChange = () => {
  emit('isChanged', isCompleted.value)
} */
</script>

<template>
  <div class="items d-flex flex-column">
    <div v-if="!edit" class="input-group mb-1">
      <div class="input-group-text bg-white">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :checked="checked"
            @change="toggleTask(idBoard, idTask)"
          />
        </div>
        <span class="text-secondary fw-bold fs-6 d-flex align-items-center gap-1">
          <slot></slot>
        </span>
      </div>
      <button type="button" class="btn btn-primary" @click="edit = !edit">E</button>
      <button type="button" class="btn btn-danger" @click="deleteTask(idBoard, idTask)">R</button>
    </div>
    <div v-else class="input-group mb-1">
      <input v-model="data" type="text" class="form-control bg-white text-secondary fw-bold" />
      <button class="btn btn-success" type="button" @click="handleUpdate">Save</button>
    </div>
    <!-- <div class="btn-group mb-1" role="group">
      <button class="btn btn-light text-left shadow-sm bg-white w-100">
      </button>
    </div> -->
  </div>
</template>
