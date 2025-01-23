import { API__URL } from '@/config'

const login = async (email, password) => {
    const res = await fetch(API__URL + 'login', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    if (!res.ok) {
        return null
    }
    const data = await res.json()
    return data
}

export default {
    login
}