import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ReportDetailsView from "@/views/RepoDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "Repos",
      //lazy loading
      component: () => import("../views/RepoResultsView.vue"),
    },
    {
      path: "/repos/:id",
      name: "RepoDetails",
      component: () => import("../views/RepoDetailsView.vue"),
    },
  ],
});

export default router;
