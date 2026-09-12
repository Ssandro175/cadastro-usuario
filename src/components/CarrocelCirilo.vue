<style>
/* ==========================================
       VARIAVEIS E RESET (ESTILO DARK TRAP)
       ========================================== */
:root {
  --bg-dark: #050505;
  --panel-bg: #0d0d0f;
  --accent-red: #ff1212;
  --accent-yellow: #eab308;
  --text-main: #f4f4f5;
  --text-muted: #52525b;
  --border-dark: #1e1e24;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-body);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

/* ==========================================
       CABEÇALHO (HEADER) - DARK TRAP
       ========================================== */
.dt-header {
  width: 100%;
  background: var(--bg-dark);
  border-bottom: 2px solid var(--border-dark);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Angular / Industrial */
.dt-logo {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.dt-logo .tag {
  font-size: 0.7rem;
  background-color: var(--accent-red);
  color: #000;
  padding: 2px 6px;
  font-weight: 900;
  transform: skewX(-12deg);
}

/* Menu de Navegação */
.dt-nav {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.dt-nav a {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
}

.dt-nav a:hover {
  color: var(--accent-red);
  text-shadow: 0 0 10px rgba(255, 18, 18, 0.5);
}

/* Botão com Recorte Angular (Trap / Cyber) */
.btn-dt {
  background-color: var(--text-main);
  color: #000;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 0.7rem 1.6rem;
  border: none;
  cursor: pointer;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  transition: all 0.2s ease;
}

.btn-dt:hover {
  background-color: var(--accent-red);
  color: #fff;
  box-shadow: -5px 5px 0px #000;
  transform: translate(2px, -2px);
}

/* ==========================================
       RODAPÉ (FOOTER) - DARK TRAP
       ========================================== */
.dt-footer {
  background-color: var(--panel-bg);
  border-top: 2px solid var(--border-dark);
  padding: 4rem 2rem 2rem 2rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

/* Banner "Warning/Alerta" estilo fita de isolamento */
.ticker-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--accent-red);
  color: #000;
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 3px;
  padding: 3px 0;
  text-align: center;
  text-transform: uppercase;
}

.footer-wrapper {
  max-width: 1300px;
  margin: 1rem auto 3rem auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
}

.footer-brand .dt-logo {
  margin-bottom: 1rem;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
  max-width: 360px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-main);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-title::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: var(--accent-red);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links a:hover {
  color: var(--text-main);
  letter-spacing: 2px;
}

/* Bottom Copyright Section */
.footer-bottom {
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-display);
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 8px #22c55e;
}

/* Responsividade */
@media (max-width: 850px) {
  .header-wrapper {
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
<template>
  <!-- CABEÇALHO -->
  <header class="dt-header">
    <div class="header-wrapper">
      <a href="#" class="dt-logo"> VAULT <span class="tag">808</span> </a>

      <nav>
        <ul class="dt-nav">
          <li><a href="#">Kits</a></li>
          <li><a href="#">Beats</a></li>
          <li><a href="#">Artistas</a></li>
          <li><a href="#">Vault</a></li>
        </ul>
      </nav>

      <button class="btn-dt">Entrar no Club</button>
    </div>
  </header>

  <!-- ÁREA DE CONTEÚDO (APENAS PARA DEMONSTRAÇÃO) -->
  <main style="padding: 6rem 2rem; text-align: center">
    <h1
      style="
        font-family: var(--font-display);
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: -1px;
        margin-bottom: 1rem;
      "
    >
      HEAVY 808 & DARK SOUNDS
    </h1>
    <p
      style="
        color: var(--text-muted);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
      "
    >
      [ Área reservada para o conteúdo principal do seu site ]
    </p>
  </main>

  <!-- RODAPÉ -->
  <footer class="dt-footer">
    <div class="ticker-bar">
      /// SYSTEM ONLINE — HEAVY BASS FREQUENCY — UNDERGROUND ONLY ///
    </div>

    <div class="footer-wrapper">
      <div class="footer-brand">
        <a href="#" class="dt-logo"> VAULT <span class="tag">808</span> </a>
        <p>
          Produtora independente voltada à sonoridade Dark Trap, Industrial
          Drill e estéticas urbanas underground.
        </p>
      </div>

      <div>
        <h4 class="footer-title">Catálogo</h4>
        <ul class="footer-links">
          <li><a href="#">Sound Kits</a></li>
          <li><a href="#">Drum Kits Vol. 1</a></li>
          <li><a href="#">Loops & Samples</a></li>
          <li><a href="#">Licenças de Beats</a></li>
        </ul>
      </div>

      <div>
        <h4 class="footer-title">Conectar</h4>
        <ul class="footer-links">
          <li><a href="#">Soundcloud</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Discord</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 VAULT 808. Todos os direitos reservados.</p>
      <div class="status-indicator">
        <div class="dot"></div>
        <span>Servidor Ativo</span>
      </div>
    </div>
  </footer>
</template>
