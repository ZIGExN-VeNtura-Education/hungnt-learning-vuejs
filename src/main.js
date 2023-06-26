import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia"

import piniaPlusinPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPlusinPersistedstate)

app.use(router)
app.use(pinia)

app.mount('#app')
