<script setup lang="ts">
import { reactive } from "vue";
// Components
import PatientForm from "@/components/PatientForm/index.vue";
// Models
import PatientModel from "@/models/Patient";
// Data
const patient = reactive(new PatientModel());
// Methods
function handleSubmit() {
  console.log({...patient});
}
</script>

<template>
  <section class="content">
    <header>  
      <h1>Novo Paciente</h1>
    </header>

    {{ patient }}

    <main>
      <PatientForm :patient="patient" v-slot="{isValid}">
          <div class="actions">
            <button class="save-button" type="button" :disabled="!isValid" @click="handleSubmit">Salvar</button>
          </div>
      </PatientForm>
    </main>
  </section>
</template>

<style scoped>
.content {
  min-height: calc(100vh - 65.27px);
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.actions {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.actions > button {
  width: 20%;
}

.save-button {
  padding: 1rem 0;
  background: hsla(160, 100%, 37%, 1);
  color: #000000;
}

.save-button:disabled {
  filter: grayscale(1);
  cursor: default;
}
</style>