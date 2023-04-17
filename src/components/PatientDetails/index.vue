<script lang="ts" setup>
import { computed } from "vue";
import { DateTime } from "luxon";

// Models
import PatientModel from "@/models/Patient";

// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
});
// Computeds
const address = computed(() => props.patient.address);

const birthDate = computed(() => {
  const date = new Date(props.patient.birthDate);
  const formattedDate = DateTime.fromJSDate(date).toFormat("dd/MM/yyyy");
  return formattedDate;
});
</script>

<template>
  <article class="details">
    <div>
      <label>Nome completo</label>
      <span>{{ patient.fullName }}</span>
    </div>
    <div>
      <label>Nome completo da mãe</label>
      <span>{{ patient.mothersName }}</span>
    </div>
    <div>
      <label>Data de nascimento</label>
      <span>{{ birthDate }}</span>
    </div>
    <div>
      <label>CPF</label>
      <span>{{ patient.registrationId }}</span>
    </div>
    <div>
      <label>Cartão nacional de saúde</label>
      <span>{{ patient.healthcareId }}</span>
    </div>
    <div>
      <label>Endereço</label>
      <div>
        <span>{{ address.street }}, {{ address.number }} {{ address.complement }}</span>
        <span>{{ address.neighborhood }}</span>
        <span>{{ address.city }} - {{ address.state }}</span>
        <span>{{ address.zipCode }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.details > div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.details > div > label {
  font-weight: 700;
  text-decoration: underline;
}

.details > div > div {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
