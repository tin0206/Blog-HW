import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import UserRepo from '@/repositories/UserRepo'
import { API__URL } from '@/config'

export const useAuthStore = defineStore('auth', () => {
  const loggingIn = ref(false)
  const user = ref(null)
  const token = ref(null)
  const login = async (email, password) => {
    loggingIn.value = true
    const result = await UserRepo.login(email, password)
    if (result) {
      user.value = result.user
      token.value = result.accessToken
      return true
    }
    loggingIn.value = false
    return false
  }

  const logout = async () => {
    user.value = null
    token.value = null
  }

  return { loggingIn, user, token, login, logout }
}, {
  persist: true,
})
