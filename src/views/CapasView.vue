<template>
  <div class="capas-view">
    <!-- Componente de Imagens de Capas importado -->
    <ImagensCapa @voltar="irParaLogin" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ImagensCapa from "../components/ImagensCapa.vue";

const router = useRouter();

// Função acionada ao clicar no botão "Voltar" do ImagensCapa
const irParaLogin = () => {
  router.push("/login"); // Altere a rota '/login' de acordo com o seu vue-router
};
</script>

<style scoped>
.capas-view {
  min-height: 100vh;
  width: 100%;
  background: #0d0d10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
}
</style>
