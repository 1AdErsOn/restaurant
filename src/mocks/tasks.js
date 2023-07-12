const boards = [
  {
    id: crypto.randomUUID(),
    name: 'Tablero 1',
    options: false,
    tasks: []
  },
  {
    id: crypto.randomUUID(),
    name: 'Tablero 2',
    options: false,
    tasks: []
  },
  {
    id: crypto.randomUUID(),
    name: 'Tablero 3',
    options: false,
    tasks: []
  }
]
const tasks = [
  {
    id: crypto.randomUUID(),
    tittle: 'Do something',
    completed: false,
    date: new Date()
  },
  {
    id: crypto.randomUUID(),
    tittle: 'all is doit',
    completed: false,
    date: new Date()
  },
  {
    id: crypto.randomUUID(),
    tittle: 'need more changes',
    completed: false,
    date: new Date()
  }
]
export { boards, tasks }
