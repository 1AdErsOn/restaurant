<script setup>
import { ref } from 'vue'
import OwnTasks from '../components/task/OwnTasks.vue'
import { useTaskStore } from '../stores/taskStore.js'
import { boardService } from '../services/BoardService.js'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { boards } = storeToRefs(store)
const { addNewBoard, loadBoard } = store
const isLoading = ref(true)
const inputs = ref(true)
async function preFetch() {
  if (store.boards.length === 0) {
    const boards = await boardService.getBoards()
    boards.forEach((board) => loadBoard(board))
  }
  isLoading.value = false
}
preFetch()
const handleNewBoard = () => {
  const name = prompt('Name of the Board')
  addNewBoard(name)
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-between mt-3">
      <div class="d-flex align-items-start justify-content-between mb-3">
        <button class="d-flex btn btn-outline-primary border fw-bold" @click="handleNewBoard">
          + Add a new Card
        </button>
        <h2 class="d-flex" v-if="isLoading">Loading Boards</h2>
        <button class="d-flex btn btn-outline-success border fw-bold" @click="handleNewBoard">
          / Save Tasks
        </button>
      </div>
    </div>
    <div class="boards row row-cols-auto align-items-start justify-content-around gap-2 mt-3">
      <template v-for="board of boards" :key="board.id">
        <OwnTasks
          :board="board"
          :input="inputs"
          @disable-input="inputs = false"
          @active-input="inputs = true"
        />
      </template>
    </div>
  </div>
</template>
