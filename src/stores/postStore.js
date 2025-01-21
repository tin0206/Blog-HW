import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import PostRepo from '@/repositories/PostRepo'

export const usePostStore = defineStore('post', () => {
  const loading = ref(false)
  const post = ref(null)
  const getSinglePost = async (id) => {
    loading.value = true
    post.value = await PostRepo.getSinglePost(id)
    loading.value = false
  }

  return { loading, post, getSinglePost }
})
