import axios from 'axios'
import { useUserStore } from '@/stores/index'
import router from '@/router'
import { ElMessage } from 'element-plus'

const baseURL = 'https://mammoth-cute-roughly.ngrok-free.app'

const instance = axios.create({
  // 基础地址，超时时间
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 避免6024错误ngrok
    
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
    // return res
    if (res.status === 200) {
      // ElMessage.success(res.data.msg)
      // 响应正常
      return res
    }
    ElMessage.error(res.data.msg || '服务异常')
    return Promise.reject(res)
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
