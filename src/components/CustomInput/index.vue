<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { vMaska } from 'maska'
import { Field } from 'vee-validate'
import { DateTime } from 'luxon'
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
    type: String,
    defailt: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Object, Number]
  },
  rules: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  errors: {
    type: [Object],
    default: () => {}
  }
})
// Data
const maskOption = reactive({
  mask: props.mask,
  eager: true
})
// Computeds
const content = computed({
  get: () => {
    if (props.type === 'date') {
      const date = DateTime.fromMillis(Number(props.modelValue));
      const formattedDate = date.toISODate();
      return props.modelValue ? formattedDate : null;
    }
    return props.modelValue
  },
  set: (value) => {
    if (props.type === 'date') {
      const date = DateTime.fromISO(String(value)).toMillis();
      emit('update:modelValue', date);
    } else {
      emit('update:modelValue', value)
    }
  }
})
</script>

<template>
  <div class="input-container">
    <div class="label-container">
      <label>{{ label }}</label>
      <span v-if="required">*</span>
    </div>
    <Field
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :rules="rules"
      v-maska:[maskOption]
      v-model="content"
    />
    <span v-if="errors" class="error">{{ errors[props.name] }}</span>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label-container {
  display: flex;
  gap: 0.25rem;
}

.label-container > span {
  color: hsla(160, 100%, 37%, 1);
}

input {
  padding: 0.75rem 1rem;
  border: none;
  background: var(--vt-c-black-mute);
  color: var(--vt-c-text-dark-2);
  font-size: 1rem;
  color-scheme: dark;
}

.error {
  min-height: 1.5rem;
  font-size: 0.75rem;
  color: hsla(160, 100%, 37%, 1);
}
</style>
