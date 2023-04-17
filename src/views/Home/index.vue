<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import type { Ref } from 'vue'

// Components
import CustomInput from '@/components/CustomInput/index.vue'
import PatientCard from '@/components/PatientCard/index.vue'
import Loading from '@/components/Loading/index.vue'

// Icons
import Plus from 'vue-material-design-icons/Plus.vue'

// Models
import PatientModel from '@/models/Patient'
import RequestProgressModel from '@/models/RequestProgress'

// Services
import PatientService from '@/services/PatientService'

// Services insntances
const patientService = new PatientService()

// Data
const searchValue = ref('')
const indexProgress = reactive(new RequestProgressModel())
const patients: Ref<PatientModel[]> = ref([])

// Methods
async function loadPatients() {
  try {
    indexProgress.startLoad()

    const response = await patientService.index(searchValue.value)
    patients.value = PatientModel.listSerializer(response)

    indexProgress.stopWithSuccess()
  } catch {
    indexProgress.stopWithError()
  }
}

// Life cycle
onMounted(() => {
  loadPatients()
})

// Watchers
watch(searchValue, () => {
  loadPatients()
})
</script>

<template>
  <section class="content">
    <main>
      <div class="filter">
        <CustomInput
          label="Filtrar"
          placeholder="Busque por nome, bairro, cidade ou cns..."
          v-model="searchValue"
        />
      </div>

      <div class="new-patient">
        <RouterLink :to="{ name: 'register' }">
          <button>
            <Plus />
            Adicionar paciente
          </button>
        </RouterLink>
      </div>

      <div>
        <div v-if="indexProgress.loading" class="loading">
          <Loading />
        </div>

        <div v-else class="patients-list">
          <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient" />
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped>
.content {
  min-height: calc(100vh - 65.27px);
  padding: 0 1rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.loading {
  height: 331px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.patients-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
}

.new-patient {
  width: max-content;
}

.new-patient > a > button {
  background: #00bd7e;
  color: #000000;
}
</style>
