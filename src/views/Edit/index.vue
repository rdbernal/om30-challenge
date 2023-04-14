<script setup lang="ts">
import { reactive } from "vue";
// Components
import PatientForm from "@/components/PatientForm/index.vue";
// Models
import PatientModel from "@/models/Patient";
// Data
const patient = reactive(new PatientModel());
</script>

<template>
  <section class="content">
    <header>  
      <h1>Editar paciente</h1>
    </header>

    <main>
      <PatientForm :patient="patient" />
    </main>

    <footer>
      <button class="delete-button">Excluir</button>
      <button class="save-button">Salvar</button>
    </footer>
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

footer {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

footer > .delete-button {
  padding: 1rem;
  width: 20%;
  background: #e1648b;
  color: #000000;
}

footer > .save-button {
  padding: 1rem;
  width: 20%;
  background: hsla(160, 100%, 37%, 1);
  color: #000000;
}
</style>
