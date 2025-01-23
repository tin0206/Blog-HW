import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import piniaPLuginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import routes from './routes.js'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    
})

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPLuginPersistedstate)
app.use(pinia)
app.use(router)


app.mount('#app')
