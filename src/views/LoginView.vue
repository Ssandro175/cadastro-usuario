<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main class="login-page">
    <LoginForm />
  </main>
</template>

<style scoped>
.login-page {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
