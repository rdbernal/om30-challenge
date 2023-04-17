<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onUpdated } from 'vue';
import { checkForToken } from "@/utils/auth";

// Components
import Navbar from "@/components/Navbar/index.vue";
import router from '@/router';

// Life cycle
onMounted(() => {
  const hasToken = checkForToken();

  if (!hasToken) {
    router.push({ name: "sign-in" });
  }
});

onUpdated(() => {
  const hasToken = checkForToken();

  if (!hasToken) {
    router.push({ name: "sign-in" });
  }
});
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
