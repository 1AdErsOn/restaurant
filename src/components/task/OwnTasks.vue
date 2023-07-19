<script setup>
import { ref, onMounted, watch } from 'vue'
import InputNew from './InputNew.vue'
import ItemTask from './ItemTask.vue'
import { useTaskStore } from '../../stores/taskStore.js'
import { storeToRefs } from 'pinia'

const props = defineProps({
  board: {
    required: true,
    type: Object
  },
  input: {
    required: true,
    type: Boolean
  }
})
const emit = defineEmits(['disableInput', 'activeInput'])
const store = useTaskStore()
const { totalTasks, totalTaskDone } = storeToRefs(store)
const { addNewTask, moveTaskTo, renameBoard, allCompleted, deleteBoard } = store
const options = ref(props.board.options)
const name = ref('')
//const tasks = ref([])

watch(name, (newVal) => {
  renameBoard(newVal, props.board.id)
})
/* watch(tasks, (newVal1,newVal2) => {
  addNewTask(newVal1, newVal2, props.board.id)
},{deep: true}) */

onMounted(() => {
  name.value = props.board.name || ''
  //tasks.value = props.board.tasks || []
})
/* async function preFetch() {
  //console.log(boards)
  const tasks = await taskService.getTasks()
  tasks.forEach((task) => loadTask(task))
}
preFetch() */
/* const hasTask = computed(() => {
  return store.totalTasks > 0 ? true : false
}) */
//const thisBoard = ref({})

/* const handleAllDone = (idBoard = '') => {
  allCompleted(idBoard)
  thisBoard.value = store.board
} */
const startDrag = (evt, board = {}, task = {}) => {
  emit('disableInput')
  evt.dataTransfer.setData('text/plain', JSON.stringify({ boardId: board.id, taskId: task.id }))
}
const onDrop = (evt, idDesBoard = '') => {
  const { boardId, taskId } = JSON.parse(evt.dataTransfer.getData('text/plain'))
  moveTaskTo(boardId, taskId, idDesBoard)
  emit('activeInput')
}
</script>

<template>
  <div
    class="board col rounded-3 p-3 gap-2"
    @drop="onDrop($event, board.id)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="header d-flex justify-content-between align-items-center py-2">
      <div class="name fw-bold">
        <input
          class="form-control form-control-sm bg-white text-secondary"
          type="text"
          placeholder="Name"
          v-model="name"
          v-show="input"
        />
        <div v-show="!input">{{ name }}</div>
      </div>
      <div class="actions">
        <div class="dropdown">
          <button
            class="btn btn-transparent btn-sm dropdown-toggle"
            @click="options = !options"
          ></button>
          <ul class="dropdown-menu" :class="{ show: options }">
            <li>
              <a href="#" class="dropdown-item" @click.prevent="allCompleted(board.id)"
                >Mark all done</a
              >
            </li>
            <li>
              <a href="#" class="dropdown-item" @click.prevent="deleteBoard(board.id)">Delete</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="board.tasks.length === 0" class="nada fw-bold">Nothing to to ? Add a new Task</div>
    <template v-for="task of board.tasks" :key="task.id">
      <ItemTask
        draggable="true"
        @dragstart="startDrag($event, board, task)"
        :idBoard="board.id"
        :idTask="task.id"
        :checked="task.completed"
        :tittle="task.tittle"
        :disabled="input"
      />
    </template>
    <InputNew :disabled="input" @on-new-task="(task) => addNewTask(task, board.id)" />
    <div class="message fw-bold">
      {{ totalTasks.find((item) => item.id === board.id).message }}/{{
        totalTaskDone.find((item) => item.id === board.id).message
      }}
    </div>
  </div>
</template>

<style scoped>
.board {
  background-color: #eee;
}
</style>
