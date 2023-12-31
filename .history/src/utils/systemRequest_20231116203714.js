import axios from 'axios'
import { useUserStore } from '@/stores/index'
import router from '@/router'
import { ElMessage } from 'element-plus'

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
      // 响应正常
      return res
    }
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    ElMessage.error(err.response.data.message || '服务异常')
    // TODO 5. 处理401错误
    if (err.response?.status === 401) {
      //身份认证失败
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
