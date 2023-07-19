import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

const useTaskStore = defineStore('tasks', () => {
  const boards = reactive([])
  const board = ref({
    id: crypto.randomUUID(),
    name: '',
    options: false,
    tasks: []
  })
  const totalTasks = computed(() => {
    /* if (board.value.name === '') {
      return '--'
    }
    const name = board.value.name
    const message = `Tasks: ${board.value.tasks.length.toString()}` */
    const totals = []
    boards.forEach((item) => {
      const taskData = {
        id: item.id,
        message: `Task: ${item.tasks.length}`
      }
      totals.push(taskData)
    })
    return totals
  })
  const totalTaskDone = computed(() => {
    const totalsDone = []
    boards.forEach((item) => {
      const tasks = item.tasks.filter((task) => task.completed)
      const taskData = {
        id: item.id,
        message: `Completed: ${tasks.length}`
      }
      totalsDone.push(taskData)
    })
    return totalsDone
  })
  /* const tasksCompleted = computed(() =>{
    const allTasksDone = []
    boards.forEach((item) => {
      const tempBoard = item.tasks.filter((task) => task.completed)
      allTasksDone.push(tempBoard)
    })
    return allTasksDone
  })
  const tasksIncompleted = computed(() =>{
    const allTasksDone = []
    boards.forEach((item) => {
      const tempBoard = item.tasks.filter((task) => !task.completed)
      allTasksDone.push(tempBoard)
    })
    return allTasksDone
  }) */
  const addNewTask = (text = '', idBoard = '') => {
    //console.log(text);
    const date = new Date()
    board.value = boards.find((item) => item.id === idBoard)
    board.value.tasks.push({
      id: crypto.randomUUID(),
      tittle: text,
      completed: false,
      date
    })
    //totalTasks()
    //add to board
    /* boards.forEach(item => {
      if (item.id === id) {
        const task = {
          id: crypto.randomUUID(),
          tittle: text,
          completed: false
        }
        item.tasks.push(task)
      }
    }) */
  }
  const loadTask = (task = {}) => {
    boards[0].tasks.push(task)
  }
  const toggleTask = (idBoard = '', idTask = '') => {
    board.value = boards.find((item) => item.id === idBoard)
    const task = board.value.tasks.find((item) => item.id === idTask)
    if (task?.completed !== undefined) {
      task.completed = !task.completed
    }
  }
  const deleteTask = (idBoard = '', idTask = '') => {
    //console.log('delete');
    board.value = boards.find((item) => item.id === idBoard)
    board.value.tasks = board.value.tasks.filter((item) => item.id !== idTask)
  }
  const updateTask = (idBoard = '', idTask = '', tittle = '') => {
    board.value = boards.find((item) => item.id === idBoard)
    const task = board.value.tasks.find((item) => item.id === idTask)
    if (task) {
      task.tittle = tittle
    }
  }
  const allCompleted = (idBoard = '') => {
    board.value = boards.find((item) => item.id === idBoard)
    board.value.tasks.forEach((task) => (task.completed = true))
  }
  const addNewBoard = (name = '') => {
    //const name = prompt('Name of the Board')
    if (name != null) {
      boards.push({
        id: crypto.randomUUID(),
        name,
        options: false,
        tasks: []
      })
    }
  }
  const loadBoard = (board = {}) => {
    boards.push(board)
  }
  const renameBoard = (text = '', id = '') => {
    //console.log(text);
    if (text !== '') {
      board.value = boards.find((item) => item.id === id)
      board.value.name = text
    }
  }
  const deleteBoard = (idBoard = '') => {
    //boards.filter(item => item.id !== idBoard)
    const index = boards.findIndex((item) => item.id === idBoard)
    boards.splice(index, 1)
  }
  const moveTaskTo = (idOrBoard = '', idOrTask = '', idDesBoard) => {
    if (idOrBoard !== idDesBoard) {
      const oriBoard = boards.find((item) => item.id === idOrBoard)
      const oriTask = oriBoard.tasks.find((item) => item.id === idOrTask)
      board.value = boards.find((item) => item.id === idDesBoard)
      board.value.tasks.push({ ...oriTask })
      oriBoard.tasks = oriBoard.tasks.filter((item) => item.id !== idOrTask)
    }
  }
  return {
    boards,
    addNewTask,
    addNewBoard,
    toggleTask,
    moveTaskTo,
    renameBoard,
    allCompleted,
    deleteBoard,
    deleteTask,
    totalTasks,
    totalTaskDone,
    loadBoard,
    loadTask,
    updateTask
  }
})

export { useTaskStore }
