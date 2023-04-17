<script setup lang="ts">
import { reactive } from "vue";
import router from "@/router";

// Components
import PatientForm from "@/components/PatientForm/index.vue";
import Loading from "@/components/Loading/index.vue";

// Models
import PatientModel from "@/models/Patient";
import RequestProgressModel from "@/models/RequestProgress";

// Services
import PatientService from "@/services/PatientService";

// Services instances
const patientService = new PatientService();

// Local states
const patient = reactive(new PatientModel());
const storeProgress = reactive(new RequestProgressModel());

// Methods
function handleSubmit() {
  storePatient();
}

async function storePatient() {
  try {
    storeProgress.startLoad();
    await patientService.store({ ...patient });
    router.push({ name: "home" });
    storeProgress.stopWithSuccess();
  } catch {
    storeProgress.stopWithError();
  }
}
</script>

<template>
  <section class="content">
    <header>
      <h1>Novo Paciente</h1>
    </header>

    <main>
      <PatientForm :patient="patient" v-slot="{ isValid }">
        <div class="actions">
          <button v-if="storeProgress.loading" class="save-button" type="button" disabled>
            <Loading />
          </button>
          <button
            v-else
            class="save-button"
            type="button"
            :disabled="!isValid"
            @click="handleSubmit"
          >
            Salvar
          </button>
        </div>
      </PatientForm>
    </main>
  </section>
</template>

<style scoped>
.content {
  min-height: calc(100vh - 65.27px);
  padding: 0 1rem 1rem 1rem;
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

.save-button {
  padding: 1rem 0;
  background: hsla(160, 100%, 37%, 1);
  border: 1px solid hsla(160, 100%, 37%, 1);
  color: #000000;
}

.save-button:disabled {
  filter: grayscale(1);
  cursor: default;
}

@media screen and (max-width: 840px) {
  .actions > button {
    width: 100%;
  }
}
</style>
