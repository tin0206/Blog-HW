import { API__URL } from "@/config"
const getAccounts = async () => {
    const res = await fetch(API__URL + "ids")
    const ids = await res.json()
    return ids
}
const getSingleAccount = async id => {
    const res = await fetch(API__URL + "accounts/" + id)
    const account = await res.json()
    return account
}

export default { getAccounts, getSingleAccount }