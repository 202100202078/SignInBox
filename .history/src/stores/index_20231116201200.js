//将pinia相关代码整合至此
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

app.use(createPinia().use(persist))
