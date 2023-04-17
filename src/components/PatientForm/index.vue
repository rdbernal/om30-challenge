<script lang="ts" setup>
import { toRef } from 'vue';
// Components
import CustomForm from '@/components/CustomForm/index.vue';
import CustomInput from '@/components/CustomInput/index.vue';

// Models
import PatientModel from '@/models/Patient';
import AddressModel from '@/models/Address';

// Services
import ViaCepService from '@/services/ViaCepService';

// Services instances
const viaCepService = new ViaCepService();

// Props
const props = defineProps({
  patient: {
    type: PatientModel,
    required: true
  }
})

// Data
const currentPatient = toRef(props, 'patient');

// Methods
function handlePostalCode() {
  const zipCode = currentPatient.value.address.zipCode.replace('-', '');
  if (zipCode.length === 8) {
    loadAddress(zipCode);
  }
}

async function loadAddress(zipCode: string) {
  const response = await viaCepService.getAddress(zipCode);
  const address = AddressModel.serializeViaCepResponse(response);
  updatePatientAddress(address);
}

function updatePatientAddress(address: AddressModel) {
  currentPatient.value.address = { ...address, zipCode: currentPatient.value.address.zipCode };
}
</script>

<template>
  <CustomForm v-slot="{ errors, isValid }">
    <div class="fields">
      <CustomInput
        label="Nome completo"
        placeholder="Nome do paciente"
        v-model="currentPatient.fullName"
        name="fullName"
        rules="required|fullName"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Nome da mãe"
        placeholder="Nome da mãe do paciente"
        v-model="currentPatient.mothersName"
        name="mothersName"
        rules="required|fullName"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Data de nascimento"
        placeholder="Data de nascimento"
        type="date"
        v-model="currentPatient.birthDate"
        name="birthDate"
        rules="required"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="CPF"
        placeholder="CPF"
        mask="###.###.###-##"
        v-model="currentPatient.registrationId"
        name="registrationId"
        rules="required|cpf"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Cartão nacional de saúde"
        placeholder="Número do CNS"
        mask="### #### #### ####"
        v-model="currentPatient.healthcareId"
        name="healthcareId"
        rules="required|cns"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="CEP"
        placeholder="CEP"
        mask="#####-###"
        v-model="currentPatient.address.zipCode"
        name="zipCode"
        @input="handlePostalCode"
        rules="required|cep"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Endereço"
        placeholder="Endereço"
        v-model="currentPatient.address.street"
        name="street"
        rules="required"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Número"
        placeholder="Número"
        type="number"
        v-model="currentPatient.address.number"
        name="number"
        rules="required"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Complemento"
        placeholder="Complemento"
        v-model="currentPatient.address.complement"
        name="complement"
        :errors="errors"
      />
      <CustomInput
        label="Bairro"
        placeholder="Bairro"
        v-model="currentPatient.address.neighborhood"
        name="neighborhood"
        rules="required"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Estado"
        placeholder="Estado"
        v-model="currentPatient.address.state"
        name="state"
        rules="required|state"
        :required="true"
        :errors="errors"
      />
      <CustomInput
        label="Cidade"
        placeholder="Cidade"
        v-model="currentPatient.address.city"
        name="city"
        rules="required"
        :required="true"
        :errors="errors"
      />
    </div>

    <div>
      <slot :isValid="isValid"></slot>
    </div>
  </CustomForm>
</template>

<style scoped>
.fields {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 0.75rem;
}
</style>
