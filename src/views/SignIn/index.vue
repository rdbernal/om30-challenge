<script setup lang="ts">
import { reactive } from "vue";
import router from "@/router";
import { keepAccessToken } from "@/utils/auth";

// Components
import CustomForm from "@/components/CustomForm/index.vue";
import CustomInput from "@/components/CustomInput/index.vue";
import Loading from "@/components/Loading/index.vue";

// Contracts
import type SignUpResponse from "@/contracts/auth";

// Models
import SignInModel from "@/models/SignIn";
import RequestProgressModel from "@/models/RequestProgress";

// Services
import SignInService from "@/services/SignInService";

// Services instances
const signInService = new SignInService();

// Data
const signIn = reactive(new SignInModel());
const signInProgress = reactive(new RequestProgressModel());

// Methods
function handleSubmit() {
  logIn();
}

async function logIn() {
  try {
    signInProgress.startLoad();

    const response = await signInService.signIn(signIn);
    const { accessToken } = response as SignUpResponse;

    if (!accessToken) {
      throw new Error();
    }

    keepAccessToken(accessToken);
    router.push({ name: "home" });

    signInProgress.stopWithSuccess();
  } catch {
    signInProgress.stopWithError();
  }
}
</script>

<template>
  <section class="account">
    <div class="wrapper">
      <h1>Login</h1>

      <CustomForm v-slot="{ errors, isValid }">
        <CustomInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          v-model="signIn.email"
          name="E-mail"
          rules="required|email"
          :required="true"
          :errors="errors"
        />
        <CustomInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          v-model="signIn.password"
          name="Senha"
          rules="required|password"
          :required="true"
          :errors="errors"
        />

        <RouterLink :to="{ name: 'sign-up' }" class="create-account">Criar conta</RouterLink>

        <span v-if="signInProgress.error" class="error-message">Erro ao fazer login</span>

        <button v-if="signInProgress.loading" class="submit-button" type="button" disabled>
          <Loading />
        </button>

        <button
          v-else
          class="submit-button"
          type="button"
          :disabled="!isValid"
          @click="handleSubmit"
        >
          Entrar
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

.create-account {
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
