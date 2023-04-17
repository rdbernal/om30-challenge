<script setup lang="ts">
import { reactive } from 'vue'
import router from '@/router'
import { keepAccessToken } from "@/utils/auth";

// Components
import CustomForm from '@/components/CustomForm/index.vue'
import CustomInput from '@/components/CustomInput/index.vue'
import Loading from '@/components/Loading/index.vue'

// Contracts
import type SignUpResponse from '@/contracts/auth'

// Models
import SignUpModel from '@/models/SignUp'
import RequestProgressModel from '@/models/RequestProgress'

// Services
import SignUpService from '@/services/SignUpService'

// Services instances
const signUpService = new SignUpService()

// Data
const signUp = reactive(new SignUpModel())
const signUpProgress = reactive(new RequestProgressModel())

// Methods
function handleSubmit() {
  registerUser()
}

async function registerUser() {
  try {
    signUpProgress.startLoad()
    const response = await signUpService.signUp(signUp)
    const { accessToken } = response as SignUpResponse

    if (!accessToken) {
      throw new Error()
    }

    keepAccessToken(accessToken);
    router.push({ name: 'home' })
    signUpProgress.stopWithSuccess()
  } catch {
    signUpProgress.stopWithError()
  }
}
</script>

<template>
  <section class="account">
    <div class="wrapper">
      <h1>Criar conta</h1>

      <CustomForm v-slot="{ errors, isValid }">
        <CustomInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          name="E-mail"
          rules="required|email"
          v-model="signUp.email"
          :required="true"
          :errors="errors"
        />
        <CustomInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          v-model="signUp.password"
          name="Senha"
          rules="required|password"
          :required="true"
          :errors="errors"
        />
        <CustomInput
          label="Confirme a senha"
          type="password"
          placeholder="Confirme sua senha"
          v-model="signUp.confirmPassword"
          name="Confirmação de senha"
          rules="required|confirmed:@Senha"
          :required="true"
          :errors="errors"
        />

        <RouterLink :to="{ name: 'sign-in' }" class="enter-account">Fazer Login</RouterLink>

        <span v-if="signUpProgress.error" class="error-message">Erro ao criar conta</span>

        <button v-if="signUpProgress.loading" class="submit-button" type="button" disabled>
          <Loading />
        </button>

        <button
          v-else
          class="submit-button"
          type="button"
          :disabled="!isValid"
          @click="handleSubmit"
        >
          Criar conta
        </button>
      </CustomForm>
    </div>
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

.wrapper {
  padding: 2rem;
  background: var(--vt-c-black-mute);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wrapper > h1 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #00bd7e;
}

form {
  width: 500px;
  padding: 4rem;
}

.enter-account {
  text-align: center;
}


.error-message {
  text-align: center;
  color: #e1648b;
}

.submit-button {
  padding: 1rem 0;
  background: hsla(160, 100%, 37%, 1);
  border: 1px solid hsla(160, 100%, 37%, 1);
  color: #000000;
}

.submit-button:disabled {
  filter: grayscale(1);
  cursor: default;
}
</style>
