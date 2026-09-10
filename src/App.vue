<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <!-- Cabeçalho Institucional/Didático -->
    <AppHeader />

    <!-- Área de Conteúdo Dinâmico (LoginView) -->
    <div class="content-area">
      <RouterView />
    </div>

    <!-- Rodapé -->
    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
