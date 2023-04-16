<script setup lang="ts">
import { ref } from "vue";
// Components
import CustomInput from '@/components/CustomInput/index.vue'
import PatientCard from '@/components/PatientCard/index.vue'
// Icons
import Plus from 'vue-material-design-icons/Plus.vue'
// Models
import PatientModel from '@/models/Patient'
import AddressModel from '@/models/Address'

const patients = [
  new PatientModel(
    '1',
    'José Aparecido',
    'Maria Lourdes',
    324542090,
    '12312312312',
    '123123123123123',
    new AddressModel('18043200', 'Rua Um', '201', 'Bairro Dois', 'Apto 14', 'SP', 'Sorocaba')
  ),
  new PatientModel(
    '2',
    'Mauro Almeida',
    'Rose Camargo',
    516868490,
    '12312312312',
    '123123123123123',
    new AddressModel(
      '17634200',
      'Rua Quinze',
      '5',
      'Bairro Sete',
      'Quadra 18',
      'MG',
      'Belo Horizonte'
    )
  ),
  new PatientModel(
    '3',
    'Felipe Augusto',
    'Cláudia Maria',
    706257290,
    '12312312312',
    '123123123123123',
    new AddressModel(
      '15672300',
      'Rua Capitão',
      '490',
      'Bairro Portal',
      'Apto 13',
      'SP',
      'Ribeirão Preto'
    )
  ),
  new PatientModel(
    '4',
    'Fernanda Ceribelli',
    'Glória Estevez',
    832487690,
    '12312312312',
    '123123123123123',
    new AddressModel('19625466', 'Rua Mendonça', '578', 'Bairro Campolim', '', 'SP', 'Campinas')
  )
]

// Data
const searchValue = ref("");
</script>

<template>
  <section class="content">
    <main>
      <div class="filter">
        <CustomInput label="Filtrar" placeholder="Digite para buscar" v-model="searchValue"/>
      </div>

      <div class="new-patient">
        <RouterLink :to="{ name: 'register' }">
          <button>
            <Plus />
            Adicionar paciente
          </button>
        </RouterLink>
      </div>

      <div class="patients">
        <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient" />
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
.patients {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
