import { boards, tasks } from '../mocks/tasks'

const BoardService = () => {
  const getBoards = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(boards)
      }, 1500)
    })
  }
  return { getBoards }
}

const TaskService = () => {
  const getTasks = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks)
      }, 2000)
    })
  }
  return { getTasks }
}

const boardService = BoardService()
const taskService = TaskService()

export { boardService, taskService }
