<script setup lang="ts">
import { ref, reactive } from "vue";

const formData = reactive({
  email: "",
  password: "",
  rememberMe: false,
});

const errors = reactive({ email: "", password: "" });
const showPassword = ref(false);
const isSubmitting = ref(false);
const submittedPayloadJson = ref<string | null>(null);

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) errors.email = "E-mail obrigatório.";
  else if (!regex.test(formData.email.trim()))
    errors.email = "E-mail inválido.";
  else errors.email = "";
  return !errors.email;
};

const validatePassword = () => {
  if (!formData.password) errors.password = "Senha obrigatória.";
  else if (formData.password.length < 6)
    errors.password = "Mínimo 6 caracteres.";
  else errors.password = "";
  return !errors.password;
};

const handleSubmit = () => {
  if (!validateEmail() || !validatePassword()) return;

  isSubmitting.value = true;
  setTimeout(() => {
    submittedPayloadJson.value = JSON.stringify(formData, null, 2);
    isSubmitting.value = false;
  }, 400);
};

const fillDemoData = () => {
  formData.email = "usuario@teste.com";
  formData.password = "123456";
  errors.email = "";
  errors.password = "";
};
</script>

<template>
  <div class="login-card">
    <h2>Saia da escravidão moderna</h2>
    <p class="subtitle">Ta na hora de fazer isso certo</p>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="field">
        <label for="email">E-mail</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="seu@email.com"
          :class="{ error: errors.email }"
          @blur="validateEmail"
        />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>

      <div class="field">
        <label for="password">Senha</label>
        <div class="input-group">
          <input
            id="password"
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            :class="{ error: errors.password }"
            @blur="validatePassword"
          />
          <button
            type="button"
            class="btn-toggle"
            @click="showPassword = !showPassword"
          >
            {{ showPassword ? "Ocultar" : "Ver" }}
          </button>
        </div>
        <span v-if="errors.password" class="error-text">{{
          errors.password
        }}</span>
      </div>

      <label class="checkbox">
        <input type="checkbox" v-model="formData.rememberMe" />
        Lembrar de mim
      </label>

      <button type="submit" class="btn-submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Entrando..." : "Entrar" }}
      </button>

      <button type="button" class="btn-demo" @click="fillDemoData">
        Preencher Dados de Teste
      </button>
    </form>

    <div v-if="submittedPayloadJson" class="preview">
      <strong>Payload enviado:</strong>
      <pre><code>{{ submittedPayloadJson }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
/* LOGIN CARD */
.login-card {
  width: 100%;
  max-width: 380px;
  background: #181818;
  border: 1px solid #333333;
  border-left: 4px solid #d62828;
  border-radius: 4px;
  padding: 2rem;
  box-sizing: border-box;
  color: #ffffff;
  font-family: "Courier New", Courier, monospace, sans-serif;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  margin: 0.25rem 0 1.5rem;
  color: #a0a0a0;
  text-align: center;
  font-size: 0.85rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-size: 0.75rem;
  font-weight: bold;
  color: #f1c40f;
  text-transform: uppercase;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 0.6rem;
  background: #0a0a0a;
  border: 1px solid #333333;
  border-radius: 2px;
  color: #ffffff;
  box-sizing: border-box;
  outline: none;
}

input[type="email"]:focus,
input[type="password"]:focus,
input[type="text"]:focus {
  border-color: #d62828;
}

input.error {
  border-color: #ff3333;
}

.error-text {
  color: #ff3333;
  font-size: 0.75rem;
  font-weight: bold;
}

.input-group {
  display: flex;
  gap: 0.5rem;
}

.btn-toggle {
  background: #2a2a2a;
  border: 1px solid #444444;
  color: #ffffff;
  padding: 0 0.75rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.75rem;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #cccccc;
  cursor: pointer;
}

.btn-submit {
  background: #d62828;
  color: #ffffff;
  border: none;
  padding: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-submit:hover {
  background: #b51a1a;
}

.btn-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-demo {
  background: transparent;
  border: 1px solid #444444;
  color: #a0a0a0;
  padding: 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.75rem;
}

.btn-demo:hover {
  border-color: #f1c40f;
  color: #f1c40f;
}

.preview {
  margin-top: 1.5rem;
  background: #0a0a0a;
  padding: 0.75rem;
  border: 1px solid #222222;
  border-radius: 2px;
  font-size: 0.75rem;
}

pre {
  margin: 0.5rem 0 0;
  color: #f1c40f;
  overflow-x: auto;
}
</style>
