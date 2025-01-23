<template>
    <nav>
        <ul class="flex gap-3">
            <li>
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li v-if="user">
                <button @click="doLogout">Log out</button>
            </li>
            <li v-if="!user">
                <RouterLink :to="{ name: 'login' }">Login</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)
const {logout} = authStore
const doLogout = async() => {
    await logout()
    router.replace({ name: 'login' })
}
</script>