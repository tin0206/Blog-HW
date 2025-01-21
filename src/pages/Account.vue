<template>
    <div v-if="account">
        <h2>{{ account.username }}</h2>
        <div>{{ account.email }}</div>
    </div>
</template>
<script setup>
const { id } = defineProps(['id'])
import { useAccountStore } from '@/stores/accountStore'
import { storeToRefs } from 'pinia'
const accountStore = useAccountStore()
const { account } = storeToRefs(accountStore)
const { getSingleAccount } = accountStore
getSingleAccount(id)
</script>