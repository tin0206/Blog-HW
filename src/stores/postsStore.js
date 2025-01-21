import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import PostRepo from '@/repositories/PostRepo'

export const usePostsStore = defineStore('posts', () => {
  const loading = ref(false)
  const posts = ref([])
  const getPosts = async () => {
    loading.value = true
    posts.value = await PostRepo.getPosts()
    loading.value = false
  }

  return { loading, posts, getPosts }
})
