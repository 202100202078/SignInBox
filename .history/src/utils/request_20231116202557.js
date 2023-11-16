import axios from 'axios'
import { useUserStore } from '@/stores/index'

const baseURL = ''

const instance = axios.create({
  // 基础地址，超时时间
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    return res
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
