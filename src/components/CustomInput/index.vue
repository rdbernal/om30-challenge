<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { vMaska } from 'maska'
import { Field } from 'vee-validate'
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
  },
  rules: {
    type: String,
    default: ''
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
    <Field
      :name="label"
      :type="type"
      :placeholder="placeholder"
      :rules="rules"
      v-maska:[maskOption]
      v-model="content"
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.75rem 1rem;
  border: none;
}
</style>
