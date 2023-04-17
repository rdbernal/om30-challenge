<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
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
const patient = ref(new PatientModel());
const startDelete = ref(false);
const showProgress = reactive(new RequestProgressModel());
const updateProgress = reactive(new RequestProgressModel());
const destroyProgress = reactive(new RequestProgressModel());

// Methods
function handleDelete() {
  destroyPatient(patient.value.id);
}

function handleSubmit() {
  updatePatient();
}

async function destroyPatient(id: string) {
  try {
    destroyProgress.startLoad();
    await patientService.delete(id);
    destroyProgress.stopWithSuccess();
    redirectToHomePage();
  } catch {
    destroyProgress.stopWithError();
  }
}

async function updatePatient() {
  try {
    updateProgress.startLoad();
    await patientService.update(patient.value);
    updateProgress.stopWithSuccess();
    redirectToHomePage();
  } catch {
    updateProgress.stopWithError();
  }
}

async function loadPatient(id: string) {
  try {
    showProgress.startLoad();
    const response = await patientService.show(id);
    patient.value = PatientModel.showSerializer(response);
    if (!patient.value.id) {
      throw new Error();
    }
    showProgress.stopWithSuccess();
  } catch {
    redirectToHomePage();
    showProgress.stopWithError();
  }
}

function redirectToHomePage() {
  router.push({ name: "home" });
}

onMounted(() => {
  const { id } = useRoute().params;
  loadPatient(String(id));
});
</script>

<template>
  <section class="content">
    <header>
      <h1>Editar paciente</h1>
    </header>

    <main>
      <div v-if="showProgress.loading" class="loading">
        <Loading />
      </div>

      <PatientForm v-else :patient="patient" v-slot="{ isValid }">
        <div class="actions">
          <button
            v-if="destroyProgress.loading"
            class="confirm-delete-button"
            type="button"
            disabled
          >
            <Loading />
          </button>
          <button
            v-else-if="startDelete"
            class="confirm-delete-button"
            type="button"
            @click="handleDelete"
          >
            Confirmar exclusão
          </button>
          <button v-else class="delete-button" type="button" @click="() => (startDelete = true)">
            Excluir
          </button>

          <button v-if="updateProgress.loading" class="save-button" type="button" disabled>
            <Loading />
          </button>
          <button
            v-else
            class="save-button"
            type="button"
            :disabled="!isValid"
            @click="handleSubmit"
          >
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
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

header > h1 {
  font-size: 1.3rem;
  font-weight: 700;
}

.loading {
  height: 331px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: 1px solid #e1648b;
  color: #000000;
}

.confirm-delete-button {
  padding: 1rem 0;
  background: none;
  border: 1px solid #e1648b;
  color: #e1648b;
}

.confirm-delete-button:disabled {
  filter: grayscale(1);
  cursor: default;
}

.save-button {
  padding: 1rem 0;
  background: #00bd7e;
  border: 1px solid #00bd7e;
  color: #000000;
}

.save-button:disabled {
  filter: grayscale(1);
  cursor: default;
}

@media screen and (max-width: 840px) {
  .actions {
    flex-direction: column;
    gap: 1rem;
  }

  .actions > button {
    width: 100%;
  }
}
</style>
