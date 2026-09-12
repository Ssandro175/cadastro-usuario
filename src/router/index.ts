import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ImagemCarrossel from "../views/CarrosselView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/carrossel",
      name: "carrossel",
      component: ImagemCarrossel,
    },
  ],
});

export default router;
