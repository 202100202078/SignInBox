//将pinia相关代码整合至此
import App from './App.vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia().use(persist))
