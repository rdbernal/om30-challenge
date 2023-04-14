<script lang="ts" setup>
import { reactive } from 'vue'
// Components
import CustomForm from '@/components/CustomForm/index.vue'
import CustomInput from '@/components/CustomInput/index.vue'
// Models
import PatientModel from '@/models/Patient'
// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
})
// Data
const currentPatient = reactive({ ...props.patient, address: { ...props.patient.address } })
</script>

<template>
  <CustomForm>
    <div class="fields">
      <CustomInput
        label="Nome completo"
        placeholder="Nome do paciente"
        v-model="currentPatient.fullName"
      />
      <CustomInput
        label="Nome da mãe"
        placeholder="Nome da mãe do paciente"
        v-model="currentPatient.mothersName"
      />
      <CustomInput
        label="Data de nascimento"
        placeholder="Data de nascimento"
        type="date"
        v-model="currentPatient.birthDate"
      />
      <CustomInput
        label="CPF"
        placeholder="CPF"
        mask="###.###.###-##"
        v-model="currentPatient.registrationId"
      />
      <CustomInput
        label="Cartão nacional de saúde"
        placeholder="Número do CNS"
        mask="### #### #### ####"
        v-model="currentPatient.healthcareId"
      />
      <CustomInput
        label="CEP"
        placeholder="CEP"
        mask="#####-###"
        v-model="currentPatient.address.zipCode"
      />
      <CustomInput
        label="Endereço"
        placeholder="Endereço"
        v-model="currentPatient.address.street"
      />
      <CustomInput
        label="Número"
        placeholder="Número"
        type="number"
        v-model="currentPatient.address.number"
      />
      <CustomInput
        label="Complemento"
        placeholder="Complemento"
        v-model="currentPatient.address.complement"
      />
      <CustomInput
        label="Bairro"
        placeholder="Bairro"
        v-model="currentPatient.address.neighborhood"
      />
      <CustomInput label="Estado" placeholder="Estado" v-model="currentPatient.address.state" />
      <CustomInput label="Cidade" placeholder="Cidade" v-model="currentPatient.address.city" />
    </div>
  </CustomForm>
</template>

<style scoped>
.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>
