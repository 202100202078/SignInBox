import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('interface-user', () => {
  const token = ref()
})
