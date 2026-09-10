<script setup lang="ts">

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-info">
        <p class="copyright">
          &copy; {{ currentYear }} <strong>SENAC</strong> • Disciplina de Desenvolvimento Web Front-End
        </p>
        <p class="subtext">
          Exemplo prático construído com Vue.js 3, TypeScript e Composition API.
        </p>
      </div>

      <div class="footer-links">
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="footer-link">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Documentação Vue.js
        </a>
        <span class="divider">•</span>
        <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer" class="footer-link">
          Guia Inicial
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  width: 100%;
  margin-top: auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid var(--card-border);
  padding: 1.25rem 1.5rem;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .app-footer {
    background: rgba(15, 23, 42, 0.8);
    border-top: 1px solid rgba(51, 65, 85, 0.7);
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.copyright {
  font-size: 0.85rem;
  color: var(--text-main);
  margin: 0;
}

.subtext {
  font-size: 0.775rem;
  color: var(--text-muted);
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-link {
  font-size: 0.825rem;
  color: var(--text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.divider {
  color: var(--card-border);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .footer-links {
    justify-content: center;
  }
}
</style>
