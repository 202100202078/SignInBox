import { createApp } from 'vue'
import '@/assets/style/base.scss'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/fonts/iconfont/iconfont.css'
import 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')
