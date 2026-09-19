<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>
<template>
  <header class="app-header">
    <div class="brand">
      <!-- Ícone Foice e Martelo em SVG Amarelo (#f1c40f) -->
      <svg
        class="hammer-sickle-icon"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="#f1c40f"
      >
        <path
          d="M12.5 2C10.5 2 8.6 2.8 7.2 4.2C5.5 5.9 4.7 8.3 5 10.7C5.1 11.6 5.4 12.4 5.9 13.1L2.3 16.7C1.9 17.1 1.9 17.7 2.3 18.1L3.9 19.7C4.3 20.1 4.9 20.1 5.3 19.7L8.9 16.1C9.6 16.6 10.4 16.9 11.3 17C13.7 17.3 16.1 16.5 17.8 14.8C19.2 13.4 20 11.5 20 9.5C20 9 19.6 8.5 19.1 8.5C18.6 8.5 18.1 8.9 18.1 9.4C18.1 10.9 17.5 12.4 16.4 13.4C15.1 14.7 13.2 15.3 11.3 15C10.5 14.9 9.8 14.5 9.2 14L13.8 9.4C14.2 9 14.2 8.4 13.8 8L12.2 6.4C11.8 6 11.2 6 10.8 6.4L6.4 10.8C5.9 10.2 5.5 9.5 5.4 8.7C5.2 6.8 5.8 4.9 7.2 3.5C8.6 2.1 10.5 1.4 12.5 1.4C13 1.4 13.5 1 13.5 0.5C13.5 0 13 -0.1 12.5 2Z"
        />
        <path
          d="M20.2 3.8L13.5 10.5L15.5 12.5L22.2 5.8C22.6 5.4 22.6 4.8 22.2 4.4L21.6 3.8C21.2 3.4 20.6 3.4 20.2 3.8Z"
        />
      </svg>
      <h1>Trap Experience</h1>
    </div>
    <span class="badge">v1.0</span>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  padding: 1rem 1.5rem;
  background: #111111;
  border-bottom: 2px solid #d62828;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand h1 {
  font-size: 1.1rem;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Courier New", Courier, monospace, sans-serif;
}

.hammer-sickle-icon {
  display: inline-block;
  vertical-align: middle;
}

.badge {
  font-size: 0.75rem;
  font-weight: bold;
  background: #f1c40f;
  color: #000000;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  font-family: "Courier New", Courier, monospace, sans-serif;
}
</style>
