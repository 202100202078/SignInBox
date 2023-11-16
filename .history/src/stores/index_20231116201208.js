//将pinia相关代码整合至此
import App from './App.vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

app.use(createPinia().use(persist))
