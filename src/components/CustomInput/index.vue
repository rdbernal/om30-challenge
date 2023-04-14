<script lang="ts" setup>
import { reactive } from 'vue'
import { vMaska } from 'maska'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: '...'
  },
  type: {
    type: String,
    default: 'text'
  },
  mask: {
    type: String
  }
})

const maskOption = reactive({
  mask: props.mask,
  eager: true
})
</script>

<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder" v-maska:[maskOption] />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.5rem 1rem;
}
</style>
