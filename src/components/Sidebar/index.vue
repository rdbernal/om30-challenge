<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside>
    <RouterLink :to="{ name: 'home' }"> OM30 - H34lth </RouterLink>

    <button class="log-out">Sair</button>
  </aside>
</template>

<style scoped>
aside {
  height: 100vh;
  padding: 3rem 2rem;
  background: var(--color-background-mute);
  display: flex;
  flex-direction: column;
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
