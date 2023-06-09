<script lang="ts" setup>
import { computed, ref } from "vue";
import { DateTime } from "luxon";

// Components
import Modal from "@/components/Modal/index.vue";
import PatientDetails from "@/components/PatientDetails/index.vue";

// Models
import PatientModel from "@/models/Patient";

// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
});

// Local states
const showModal = ref(false);

//Computeds
const address = computed(() => props.patient.address);

const birthDate = computed(() => {
  const date = new Date(props.patient.birthDate);
  const formattedDate = DateTime.fromJSDate(date).toFormat("dd/MM/yyyy");
  return formattedDate;
});
</script>

<template>
  <article class="card">
    <Modal v-if="showModal" @close="() => (showModal = false)">
      <template #header>
        <h3>Detalhes</h3>
      </template>
      <PatientDetails :patient="patient" />
    </Modal>

    <header>
      <img v-if="patient.imageUrl" :src="patient.imageUrl" alt="Profile picture" />
      <div>
        <h3>{{ patient.fullName }}</h3>
        <div>
          <span>{{ address.neighborhood }}</span>
          <span>{{ address.city }}-{{ address.state }}</span>
        </div>
      </div>
    </header>

    <main>
      <div>
        <label>Data de nascimento</label>
        <span>{{ birthDate }}</span>
      </div>
      <div>
        <label>CNS</label>
        <span>{{ patient.healthcareId }}</span>
      </div>
    </main>

    <footer>
      <button class="detail-button" @click="() => (showModal = true)">Detalhes</button>
      <RouterLink :to="{ name: 'edit', params: { id: patient.id } }">
        <button class="edit-button">Editar</button>
      </RouterLink>
    </footer>
  </article>
</template>

<style scoped>
.card {
  padding: 1rem;
  background: var(--color-background-mute);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

header > img {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
}

header > div {
  display: flex;
  flex-direction: column;
}

header > div > div {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

main > div {
  display: flex;
  flex-direction: column;
}

main > div > label {
  font-weight: bold;
}

footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

footer > .detail-button {
  width: 100%;
  background: #18c1f0;
  color: #000000;
}

footer > a > .edit-button {
  width: 100%;
  background: #00bd7e;
  color: #000000;
}
</style>
