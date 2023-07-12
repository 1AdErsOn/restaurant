<script setup>
import { ref } from 'vue'
import InputNew from './InputNew.vue'
import ItemTask from './ItemTask.vue'
import { useTaskStore } from '../../stores/taskStore.js'
import { taskService } from '../../services/BoardService.js'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { boards, totalTasks, totalTaskDone } = storeToRefs(store)
const { addNewTask, moveTaskTo, renameBoard, allCompleted, deleteBoard, loadTask } = store
const inputs = ref(true)
async function preFetch() {
  const tasks = await taskService.getTasks()
  tasks.forEach((task) => loadTask(task))
}
preFetch()
/* const hasTask = computed(() => {
  return store.totalTasks > 0 ? true : false
}) */
//const thisBoard = ref({})
const handleRename = (idBoard = '') => {
  const name = prompt('Name of the Board')
  renameBoard(name, idBoard)
}
/* const handleAllDone = (idBoard = '') => {
  allCompleted(idBoard)
  thisBoard.value = store.board
} */
const startDrag = (evt, board = {}, task = {}) => {
  inputs.value = false
  evt.dataTransfer.setData('text/plain', JSON.stringify({ boardId: board.id, taskId: task.id }))
}
const onDrop = (evt, idDesBoard = '') => {
  const { boardId, taskId } = JSON.parse(evt.dataTransfer.getData('text/plain'))
  moveTaskTo(boardId, taskId, idDesBoard)
  inputs.value = true
}
</script>

<template>
  <div class="boards row row-cols-auto align-items-start justify-content-around gap-2 mt-3">
    <div
      class="board col rounded-3 p-3 gap-2"
      v-for="board of boards"
      @drop="onDrop($event, board.id)"
      @dragover.prevent
      @dragenter.prevent
      :key="board.id"
    >
      <div class="header d-flex justify-content-between align-items-center py-2">
        <div class="name fw-bold">{{ board.name }}</div>
        <div class="actions">
          <div class="dropdown">
            <button
              class="btn btn-transparent btn-sm dropdown-toggle"
              @click="board.options = !board.options"
            ></button>
            <ul class="dropdown-menu" :class="{ show: board.options }">
              <li>
                <a href="#" class="dropdown-item" @click.prevent="allCompleted(board.id)"
                  >Mark all done</a
                >
              </li>
              <li>
                <a href="#" class="dropdown-item" @click.prevent="handleRename(board.id)">Rename</a>
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
        >
          {{ task.tittle }}
        </ItemTask>
      </template>
      <InputNew :disabled="inputs" @on-new-task="(task) => addNewTask(task, board.id)" />
      <div class="message fw-bold">
        {{ totalTasks.find((item) => item.id === board.id).message }}/{{
          totalTaskDone.find((item) => item.id === board.id).message
        }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  background-color: #eee;
}
</style>
