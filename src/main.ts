import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
import i18n from './locale'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
