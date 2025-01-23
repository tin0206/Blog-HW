<template>
    <h1>Login</h1>
    <form method="POST" @submit.prevent="doLogin">
        <input type="text" placeholder="email" v-model="email" class="border px-5 py-1 m-1 border-black/40 rounded-md"/>
        <hr>
        <input type="password" placeholder="password" v-model="password" class="border px-5 py-1 m-1 border-black/40 rounded-md"/>
        <hr>
        <div v-if="loginHasError" class="bg-orange/60 border-red-500">
            <p>Thong tin dang nhap khong chinh xac</p>
        </div>
        <button type="submit">Đăng nhập</button>
    </form>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const {isLoggingIn, user} = storeToRefs(authStore)
const {login} = authStore
const router = useRouter()

const email = ref('tin26@gmail.com')
const password = ref('123456')
const loginHasError = ref(false)

const doLogin = async() => {
    const loginResult = await login(email.value, password.value)
    if (loginResult) {
        router.replace({ name: 'profile' })
    }
    else {
        loginHasError.value = true
    }
}
</script>