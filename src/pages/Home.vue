<template>
    <div v-if="loading">
        Loading
    </div>
    <Post 
        v-else v-for="post in posts"
        :key="post.id"
        :post="post"
    />
</template>
<script setup>
import Post from '@/components/Post.vue'
import { usePostsStore } from '@/stores/postsStore'
import { storeToRefs } from 'pinia'
const postStore = usePostsStore()
const { loading, posts } = storeToRefs(postStore)
const { getPosts } = postStore
getPosts()
</script>