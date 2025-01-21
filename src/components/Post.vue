<template>
    <div>
        <h2>
            <RouterLink :to="{ name: 'detail', params: { id: post.id }}">
                {{ post.title }}
            </RouterLink>
        </h2>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
const { post } = defineProps(['post'])
</script>