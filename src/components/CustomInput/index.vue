<script lang="ts" setup>

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "..."
  },
  type: {
    type: String,
    default: "text"
  }
})

/*
PODE SER:
 - NOME
 - DATA
 - CPF
 - CARTEIRA DE SAÚDE
  - RUA
  - BAIRRO
  - CEP
  - NÚMERO
  - COMPLEMENTO
  - ESTADO
  - CIDADE
*/
</script>



<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder"/>
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