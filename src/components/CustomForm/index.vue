<script lang="ts" setup>
import { Form } from 'vee-validate'
</script>

<template>
  <Form v-slot="{ errors }">    
    <slot :errors="errors"></slot>
  </Form>
</template>

<style scoped></style>
