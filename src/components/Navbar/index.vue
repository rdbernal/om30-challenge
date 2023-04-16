<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }"> OM30 - H34lth </RouterLink>
    <button class="log-out">Sair</button>
  </nav>
</template>

<style scoped>
nav {
  width: 100vw;
  background: var(--color-background-mute);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  font-size: 1.3rem;
  font-weight: bold;
}

.log-out {
  background: none;
  border: none;
  outline: none;
  color: var(--vt-c-text-dark-2);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
