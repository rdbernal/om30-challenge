<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <section class="page">
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
