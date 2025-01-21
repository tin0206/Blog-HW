<template>
    <div v-if="post">
        <h2>{{ post.title }}</h2>
        <div>{{ post.content }}</div>
        <RouterLink :to="{ name: 'account', params: { id: post.id }}">
            <button>{{ post.id }}</button>
        </RouterLink>
    </div>
</template>
<script setup>
const { id } = defineProps(['id'])
import { usePostStore } from '@/stores/postStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
const postStore = usePostStore()
const { post } = storeToRefs(postStore)
const { getSinglePost } = postStore

getSinglePost(id)
</script>
<style lang="scss" scoped>
button {
    border: 1px solid black;
    width: 100px;
}
</style>