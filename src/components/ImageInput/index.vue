<script lang="ts" setup>
import { computed } from "vue";

// Events
const emit = defineEmits(["update:modelValue"]);

// Props
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ""
  }
})

// Computeds
const content = computed(() => {
  get: () => props.modelValue;
})

// Methods
function handleImage(event: Event) {
  const element = event.target as HTMLInputElement;
  const file = element.files?.[0];

  const reader = new FileReader();
  let base64String = "";

  reader.onload = () => {
    base64String = String(reader.result);
    emit("update:modelValue", base64String);
  }
  
  if (file) {
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <div class="container">
    <label for="file">{{ label }}</label>
    <input type="file" id="file" @change="handleImage">
  </div>
</template>

<style scoped>
input[type=file] {
  display: none;
}

label {
  background: hsla(160, 100%, 37%, 1);
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
}
</style>