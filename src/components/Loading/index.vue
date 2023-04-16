<script lang="ts" setup>
import { computed } from 'vue';

// Components
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const props = defineProps({
  size: {
    type: String,
    default: "8"
  }
})
// Computeds
const loadingSize = computed(() => {
  return `${props.size}px`;
})
</script> 

<template>
  <PulseLoader :size="loadingSize"/>
</template>

<style scoped></style>