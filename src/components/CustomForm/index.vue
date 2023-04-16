<script lang="ts" setup>
import { Form } from 'vee-validate'
</script>

<template>
  <Form as="form" v-slot="{ errors, meta }">
    <slot :errors="errors" :isValid="meta.valid && meta.dirty"></slot>
  </Form>
</template>

<style scoped>
form {
  padding: 2rem 1rem;
  background: var(--vt-c-black-soft);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
