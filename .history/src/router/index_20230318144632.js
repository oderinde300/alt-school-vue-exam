import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RepoDetailsView from "@/views/RepoDetailsView.vue";

const routes = [
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
    // component: () => import("../views/RepoDetailsView.vue"),
    component: RepoDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
