import { ID_INJECTION_KEY } from 'element-plus';
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)

app.provide(ID_INJECTION_KEY, {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
})

app.mount('#app')
