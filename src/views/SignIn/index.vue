<script setup lang="ts">
// import { Form } from 'vee-validate';
// Components
// import CustomInput from '@/components/CustomInput/index.vue'

// const schema = {
//   email: "required|email",
//   password: "required"
// }
</script>

<template>
  <section class="account">
    <!-- <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
      <CustomInput label="E-mail" placeholder="Insira seu e-mail" rules="required|email"/>
      <CustomInput label="Senha" type="password" placeholder="Senha" rules="required"/>
    </Form> -->
  </section>
</template>

<style scoped>
.account {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--vt-c-indigo);
}
</style>
