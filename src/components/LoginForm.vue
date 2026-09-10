<script setup lang="ts">
import { ref, reactive } from 'vue'

// ==========================================
// TIPAGEM DOS DADOS (TypeScript)
// ==========================================
interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

interface ValidationErrors {
  email?: string
  password?: string
}

// ==========================================
// ESTADOS REATIVOS (Vue 3 Composition API)
// ==========================================

// 1. Dados do formulário vinculados aos inputs através de v-model
const formData = reactive<LoginCredentials>({
  email: '',
  password: '',
  rememberMe: false
})

// 2. Erros de validação
const errors = reactive<ValidationErrors>({
  email: '',
  password: ''
})

// 3. Controles de interface (UI)
const showPassword = ref<boolean>(false)
const isSubmitting = ref<boolean>(false)
const submittedPayloadJson = ref<string | null>(null)
const successMessage = ref<string | null>(null)

// ==========================================
// FUNÇÕES DE VALIDAÇÃO
// ==========================================

// Validação do campo de e-mail
const validateEmail = (): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!formData.email.trim()) {
    errors.email = 'O campo de e-mail é obrigatório.'
    return false
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = 'Insira um endereço de e-mail válido (ex: aluno@senac.br).'
    return false
  }
  
  errors.email = ''
  return true
}

// Validação do campo de senha
const validatePassword = (): boolean => {
  if (!formData.password) {
    errors.password = 'O campo de senha é obrigatório.'
    return false
  } else if (formData.password.length < 6) {
    errors.password = 'A senha deve conter no mínimo 6 caracteres.'
    return false
  }
  
  errors.password = ''
  return true
}

// Alternar visibilidade da senha
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// ==========================================
// SUBMISSÃO DO FORMULÁRIO
// ==========================================
const handleSubmit = async () => {
  // Reset de feedbacks anteriores
  submittedPayloadJson.value = null
  successMessage.value = null

  // Executa as validações
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()

  // Se houver qualquer erro, interrompe o envio
  if (!isEmailValid || !isPasswordValid) {
    return
  }

  isSubmitting.value = true

  // Simulando um pequeno delay de processamento para efeito visual
  setTimeout(() => {
    // Montagem do objeto JSON final
    const payload = {
      email: formData.email.trim(),
      password: formData.password,
      rememberMe: formData.rememberMe,
      submittedAt: new Date().toISOString()
    }

    // Conversão para JSON formatado (com indentação de 2 espaços)
    const jsonString = JSON.stringify(payload, null, 2)
    submittedPayloadJson.value = jsonString
    successMessage.value = 'Login validado com sucesso! Dados encaminhados ao console.'

    // =======================================================
    // ENCAMINHAMENTO PARA O CONSOLE DO NAVEGADOR EM FORMATO JSON
    // =======================================================
    console.group('%c🚀 [VUE 3] Formulário de Login Submetido', 'color: #42b883; font-weight: bold; font-size: 14px;')
    console.log('%cJSON Formatado (String):', 'color: #3b82f6; font-weight: 600;')
    console.log(jsonString)
    console.log('%cObjeto JavaScript Puro:', 'color: #10b981; font-weight: 600;', payload)
    console.groupEnd()

    isSubmitting.value = false
  }, 400)
}

// Função auxiliar para preencher dados de exemplo (ótimo para agilizar a aula)
const fillDemoData = () => {
  formData.email = 'professor.vue@senac.edu.br'
  formData.password = 'vue123456'
  formData.rememberMe = true
  errors.email = ''
  errors.password = ''
}

// Handler didático para o link de esqueci a senha
const handleForgotPassword = () => {
  window.alert('Exemplo para a aula: fluxo de recuperação de senha!')
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Cabeçalho do Card -->
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h2 class="card-title">Acesso ao Sistema</h2>
        <p class="card-subtitle">Entre com suas credenciais para continuar</p>
      </div>

      <!-- Formulário com interceptação @submit.prevent -->
      <form @submit.prevent="handleSubmit" class="login-form" novalidate>
        
        <!-- Campo: E-mail -->
        <div class="form-group">
          <label for="email" class="form-label">
            E-mail
            <span class="required">*</span>
          </label>
          <div class="input-wrapper" :class="{ 'has-error': errors.email }">
            <span class="input-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="seu.email@exemplo.com"
              class="form-input"
              :aria-invalid="!!errors.email"
              @input="errors.email && validateEmail()"
              @blur="validateEmail"
            />
          </div>
          <!-- Mensagem de Erro Condicional -->
          <transition name="fade">
            <span v-if="errors.email" class="error-message">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {{ errors.email }}
            </span>
          </transition>
        </div>

        <!-- Campo: Senha -->
        <div class="form-group">
          <div class="label-row">
            <label for="password" class="form-label">
              Senha
              <span class="required">*</span>
            </label>
            <a href="#" class="forgot-link" @click.prevent="handleForgotPassword">Esqueceu?</a>
          </div>
          <div class="input-wrapper" :class="{ 'has-error': errors.password }">
            <span class="input-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Digite sua senha"
              class="form-input"
              :aria-invalid="!!errors.password"
              @input="errors.password && validatePassword()"
              @blur="validatePassword"
            />
            <!-- Botão Mostrar/Ocultar Senha -->
            <button
              type="button"
              class="toggle-password"
              :title="showPassword ? 'Ocultar senha' : 'Exibir senha'"
              @click="togglePasswordVisibility"
            >
              <svg v-if="!showPassword" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </button>
          </div>
          <!-- Mensagem de Erro Condicional -->
          <transition name="fade">
            <span v-if="errors.password" class="error-message">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {{ errors.password }}
            </span>
          </transition>
        </div>

        <!-- Opções adicionais: Lembrar de mim -->
        <div class="form-actions-row">
          <label class="checkbox-label">
            <input
              v-model="formData.rememberMe"
              type="checkbox"
              class="checkbox-input"
            />
            <span class="checkbox-custom"></span>
            <span class="checkbox-text">Lembrar meus dados</span>
          </label>
        </div>

        <!-- Botão de Envio com Estado de Loading -->
        <button
          type="submit"
          class="submit-button"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting" class="button-content">
            <span>Entrar no Sistema</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span v-else class="button-loading">
            <span class="spinner"></span>
            Processando...
          </span>
        </button>

        <!-- Botão Didático Auxiliar (Preencher Demo) -->
        <div class="demo-actions">
          <button type="button" class="demo-button" @click="fillDemoData">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Preencher dados de teste (Demo da Aula)
          </button>
        </div>
      </form>

      <!-- Feedback de Sucesso & Visualizador de JSON para a Aula -->
      <transition name="slide-fade">
        <div v-if="submittedPayloadJson" class="json-preview-box">
          <div class="preview-header">
            <div class="preview-title">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{{ successMessage }}</span>
            </div>
            <span class="preview-tag">Console F12</span>
          </div>
          <p class="preview-hint">
            Abra o <strong>DevTools (F12 > Console)</strong> para visualizar o log direto! Veja abaixo a réplica do JSON transmitido:
          </p>
          <pre class="json-code"><code>{{ submittedPayloadJson }}</code></pre>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
}

.login-card {
  width: 100%;
  max-width: 460px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .login-card {
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
  }
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(66, 184, 131, 0.15);
  color: var(--primary-color);
  border-radius: 16px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.card-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
}

.required {
  color: var(--error-color);
}

.forgot-link {
  font-size: 0.8rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.forgot-link:hover {
  text-decoration: underline;
  opacity: 0.85;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--input-bg);
  border: 1.5px solid var(--input-border);
  border-radius: 12px;
  transition: all 0.25s ease;
}

.input-wrapper:focus-within {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
}

.input-wrapper.has-error {
  border-color: var(--error-color);
  background: rgba(239, 68, 68, 0.02);
}

.input-wrapper.has-error:focus-within {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.input-icon {
  position: absolute;
  left: 14px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  font-size: 0.925rem;
  color: var(--text-main);
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
}

.form-input::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: color 0.2s;
}

.toggle-password:hover {
  color: var(--text-main);
}

.error-message {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--error-color);
  font-weight: 500;
  margin-top: 0.2rem;
}

.form-actions-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.checkbox-input {
  accent-color: var(--primary-color);
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.submit-button {
  width: 100%;
  padding: 0.85rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(66, 184, 131, 0.35);
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.45);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.button-loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.demo-actions {
  display: flex;
  justify-content: center;
  margin-top: -0.25rem;
}

.demo-button {
  background: transparent;
  border: 1px dashed var(--input-border);
  color: var(--text-muted);
  font-size: 0.775rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
}

.demo-button:hover {
  background: rgba(66, 184, 131, 0.08);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Painel de Exibição do JSON (Didático) */
.json-preview-box {
  margin-top: 1.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.25rem;
  color: #f8fafc;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.preview-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #34d399;
}

.preview-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.4);
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  font-weight: 600;
}

.preview-hint {
  font-size: 0.78rem;
  color: #94a3b8;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.json-code {
  background: #020617;
  padding: 0.85rem;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #38bdf8;
  overflow-x: auto;
  margin: 0;
  line-height: 1.5;
}

/* Transições suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.75rem 1.25rem;
  }
  .card-title {
    font-size: 1.3rem;
  }
}
</style>
