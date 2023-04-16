<script setup lang="ts">
import { ref, reactive } from 'vue'
// Components
import PatientForm from '@/components/PatientForm/index.vue'
// Models
import PatientModel from '@/models/Patient'
// Data
const patient = reactive(new PatientModel())
const startDelete = ref(false)
// Methods
function handleDelete() {
  console.log("Deletar paciente");
}

function handleSubmit() {
  console.log(patient)
}
</script>

<template>
  <section class="content">
    <header>
      <h1>Editar paciente</h1>
    </header>

    <main>
      <PatientForm :patient="patient" v-slot="{ isValid }">
        <div class="actions">
          <button v-if="startDelete" class="confirm-delete-button" type="button" @click="handleDelete">
            Confirmar exclusão
          </button>
          <button v-else class="delete-button" type="button" @click="() => (startDelete = true)">
            Excluir
          </button>
          <button class="save-button" type="button" :disabled="!isValid" @click="handleSubmit">
            Salvar alterações
          </button>
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
  gap: 2rem;
}

header > h1 {
  font-size: 1.3rem;
  font-weight: 700;
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

.delete-button {
  padding: 1rem 0;
  background: #e1648b;
  color: #000000;
}

.confirm-delete-button {
  padding: 1rem 0;
  background: none;
  border: 1px solid #e1648b;
  color: #e1648b;
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
