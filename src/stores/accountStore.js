import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AccountRepo from '@/repositories/AccountRepo'

export const useAccountStore = defineStore('account', () => {
    const loading = ref(false)
    const account = ref(null)
    const getSingleAccount = async (id) => {
        loading.value = true
        account.value = await AccountRepo.getSingleAccount(id)
        loading.value = false
    }

    return { loading, account, getSingleAccount }
})