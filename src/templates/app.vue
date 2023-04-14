<script setup lang="ts">
import { RouterView } from 'vue-router'
// Components
import Navbar from "@/components/Navbar/index.vue";
</script>

<template>
  <section class="page">
    <Navbar />
    <RouterView />
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
