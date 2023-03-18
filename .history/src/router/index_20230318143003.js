import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ReportDetailsView from "@/views/RepoDetailsView.vue";

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
    component: () => import("../views/RepoDetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
