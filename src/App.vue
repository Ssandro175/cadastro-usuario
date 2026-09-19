<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="center-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Reset Básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  background-color: #050505 !important;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

/* Layout Principal em Flexbox Verticamente */
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Container Centralizador */
.center-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}
</style>
