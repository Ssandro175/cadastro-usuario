<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <p>
      &copy; {{ currentYear }} Todos os Direitos Reservados / RTP/Distribuidora
    </p>
  </footer>
</template>
<style scoped>
/* APP FOOTER */
.app-footer {
  width: 100%;
  padding: 1rem;
  background: #111111;
  border-top: 2px solid #d62828;
  text-align: center;
  box-sizing: border-box;
}

p {
  margin: 0;
  font-size: 0.8rem;
  color: #a0a0a0;
  font-family: monospace;
}
</style>
