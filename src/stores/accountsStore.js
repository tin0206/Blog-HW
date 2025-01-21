import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AccountRepo from '@/repositories/AccountRepo'
export const useAccountsStore = defineStore('accounts', () => {
    const loading = ref(false)
    const accounts = ref([])
    const getAccounts = async () => {
        loading.value = true
        accounts.value = await AccountRepo.getAccounts()
        loading.value = false
    }

    return { loading, accounts, getAccounts }
})