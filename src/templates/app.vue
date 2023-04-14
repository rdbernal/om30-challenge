<script setup lang="ts">
import { RouterView } from 'vue-router'
// Components
import Sidebar from "@/components/Sidebar/index.vue";
</script>

<template>
  <section class="page">
    <Sidebar />
    <RouterView />
  </section>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
</style>
