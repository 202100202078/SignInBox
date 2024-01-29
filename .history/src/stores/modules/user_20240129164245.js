import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'interface-user',
  () => {
    //用户标识
    const token = ref('1234')
    const msg = ref('hhh')
    const setToken = (t) => {
      token.value = t
    }
    return {
      token,
      msg,
      setToken
    }
  },
  {
    persist: true,
    key: 'interface-token',
    paths: ['token']
  }
)
