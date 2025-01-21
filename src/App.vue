<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="border-b p-5">
    <NavBar />
  </div>
  <div class="p-5">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
