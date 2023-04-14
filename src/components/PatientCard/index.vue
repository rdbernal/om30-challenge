<script lang="ts" setup>
import { computed } from "vue";
// Models
import PatientModel from "@/models/Patient";
// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
})
//Computeds
const address = computed(() => props.patient.address)
</script>

<template>
  <article>
    <header>
      <img src="@/assets/img/profile-picture.jpeg" alt="Profile picture" />
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
        <span>{{ patient.birthDate }}</span>
      </div>
      <div>
        <label>CNS</label>
        <span>{{ patient.healthcareId }}</span>
      </div>
    </main>

    <footer>
      <button>Detalhes</button>
      <button>Editar</button>
    </footer>
  </article>
</template>

<style scoped>
article {
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
  height: auto;
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
</style>
