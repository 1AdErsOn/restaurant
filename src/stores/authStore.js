import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('Autentication', () => {
  const authUser = reactive({
    user: null
  })
  const user = computed(() => authUser.user)
  async function getToken() {
    await fetch() // get accsess clave
  }
  async function getUser() {
    await getToken()
    const response = await fetch()
    const result = response.json()
    authUser.user = result.data
  }
  return { user, getUser }
})

export { useAuthStore }
