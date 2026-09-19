import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ImagensCapa from "../views/CapasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/capas",
      name: "capas",
      component: ImagensCapa,
    },
  ],
});

export default router;
