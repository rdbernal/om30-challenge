<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { vMaska } from 'maska'
// Events
const emit = defineEmits(['update:modelValue'])
// Props
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
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Date, Number]
  }
})
// Data
const maskOption = reactive({
  mask: props.mask,
  eager: true
})
// Computeds
const content = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder" v-maska:[maskOption] v-model="content" />
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
