import { API__URL } from '@/config'
const getPosts = async () => {
    const res = await fetch(API__URL + 'posts')
    const posts = await res.json()
    return posts
}

const getSinglePost = async id => {
    const res = await fetch(API__URL + 'posts/' + id)
    const post = await res.json()
    return post
}

export default { getPosts, getSinglePost }