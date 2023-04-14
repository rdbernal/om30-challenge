<script lang="ts" setup>
import { toRef } from 'vue'
// Components
import CustomForm from '@/components/CustomForm/index.vue'
import CustomInput from '@/components/CustomInput/index.vue'
// Models
import PatientModel from '@/models/Patient'
import AddressModel from '@/models/Address'
// Services
import ViaCepService from '@/services/ViaCep'
// Services instances
const viaCepService = new ViaCepService()
// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
})
// Data
const currentPatient = toRef(props, 'patient')
// Methods
function handlePostalCode() {
  const zipCode = currentPatient.value.address.zipCode.replace('-', '')
  if (zipCode.length === 8) {
    loadAddress(zipCode)
  }
}

async function loadAddress(zipCode: string) {
  const response = await viaCepService.getAddress(zipCode)
  const address = AddressModel.serializeViaCepResponse(response)
  updatePatientAddress(address)
}

function updatePatientAddress(address: AddressModel) {
  currentPatient.value.address = { ...address, zipCode: currentPatient.value.address.zipCode }
}
</script>

<template>
  <CustomForm v-slot="{ errors }">
    {{ errors }}

    <div class="fields">
      <CustomInput
        label="Nome completo"
        placeholder="Nome do paciente"
        v-model="currentPatient.fullName"
        rules="required"
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
        rules="cpf"
      />
      <CustomInput
        label="Cartão nacional de saúde"
        placeholder="Número do CNS"
        mask="### #### #### ####"
        v-model="currentPatient.healthcareId"
        rules="cns"
      />
      <CustomInput
        label="CEP"
        placeholder="CEP"
        mask="#####-###"
        v-model="currentPatient.address.zipCode"
        @input="handlePostalCode"
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
}
</style>
