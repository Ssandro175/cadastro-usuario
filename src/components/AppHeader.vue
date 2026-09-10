<script setup lang="ts">
// Componente de Cabeçalho Didático
// Demonstração da divisão de componentes no Vue 3
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="brand">
        <!-- Ícone do Vue com acabamento moderno -->
        <div class="logo-wrapper">
          <svg class="vue-logo" viewBox="0 0 128 128" width="36" height="36" aria-label="Vue Logo">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>
        </div>
        <div class="brand-text">
          <h1 class="brand-title">{{ title || 'SENAC • Desenvolvimento Web' }}</h1>
          <span class="brand-subtitle">{{ subtitle || 'Introdução ao Vue.js 3' }}</span>
        </div>
      </div>

      <div class="header-badge-container">
        <span class="badge">
          <span class="badge-dot"></span>
          Aula Inicial • Composition API
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--card-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .app-header {
    background: rgba(15, 23, 42, 0.85);
    border-bottom: 1px solid rgba(51, 65, 85, 0.7);
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3);
  }
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: rgba(66, 184, 131, 0.12);
  border-radius: 10px;
  transition: transform 0.25s ease;
}

.logo-wrapper:hover {
  transform: rotate(5deg) scale(1.05);
}

.vue-logo {
  display: block;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-main);
  margin: 0;
}

.brand-subtitle {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary-color);
}

.header-badge-container {
  display: flex;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.775rem;
  font-weight: 600;
  background: rgba(66, 184, 131, 0.15);
  color: #166534;
  border: 1px solid rgba(66, 184, 131, 0.3);
}

@media (prefers-color-scheme: dark) {
  .badge {
    background: rgba(66, 184, 131, 0.2);
    color: #4ade80;
  }
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 0 8px var(--primary-color);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
}

@media (max-width: 640px) {
  .header-container {
    padding: 0.75rem 1rem;
  }
  .brand-title {
    font-size: 0.95rem;
  }
  .brand-subtitle {
    display: none;
  }
  .badge {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
}
</style>
