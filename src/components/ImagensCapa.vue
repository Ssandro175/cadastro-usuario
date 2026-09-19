<script setup>
// 1. IMPORTE SUAS IMAGENS DA PASTA ASSETS AQUI
import capa1 from "@/assets/img/images (1).jpg";
import capa2 from "@/assets/img/images (2).jpg";
import capa3 from "@/assets/img/images(3).jpg";
import capa4 from "@/assets/img/imagens(4).jpg";
import capa5 from "@/assets/img/imagens(5).jpg";
import capa6 from "@/assets/img/imagens(6).jpg";

// 2. MONTE A LISTA COM OS TÍTULOS E SUAS VARIÁVEIS DE IMAGEM
const albuns = [
  { id: 1, titulo: "Malino", imagem: capa1 },
  { id: 2, titulo: "VETIIIN & PSIIIKO", imagem: capa2 },
  { id: 3, titulo: "Xtranho", imagem: capa3 },
  { id: 4, titulo: "Máquina do Tempo", imagem: capa4 },
  { id: 5, titulo: "Caos", imagem: capa5 },
  { id: 6, titulo: "ISSO É TRAP", imagem: capa6 },
];
</script>

<template>
  <div class="albuns-container">
    <header class="header">
      <h2>Capas de Álbuns de Rap</h2>
      <button class="btn-back" @click="$emit('voltar')">← Voltar</button>
    </header>

    <main class="grid-albuns">
      <!-- MUDANÇA AQUI: usa o array "albuns" em vez de repetir de 1 a 6 -->
      <div v-for="album in albuns" :key="album.id" class="album-card">
        <div class="image-wrapper">
          <img :src="album.imagem" :alt="album.titulo" />
        </div>
        <span class="album-title">{{ album.titulo }}</span>
      </div>
    </main>
  </div>
</template>

<style scoped>
.albuns-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  background: #181818;
  border: 1px solid #333333;
  border-left: 4px solid #d62828;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace, sans-serif;
  color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #333333;
  padding-bottom: 0.75rem;
}

.header h2 {
  margin: 0;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #f1c40f;
  letter-spacing: 1px;
}

.btn-back {
  background: transparent;
  border: 1px solid #444444;
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: inherit;
}

.btn-back:hover {
  border-color: #d62828;
  color: #d62828;
}

.grid-albuns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.album-card {
  background: #0a0a0a;
  border: 1px solid #2a2a2a;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.2s,
    border-color 0.2s;
}

.album-card:hover {
  border-color: #f1c40f;
  transform: translateY(-2px);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #111111;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.album-title {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #a0a0a0;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .grid-albuns {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
