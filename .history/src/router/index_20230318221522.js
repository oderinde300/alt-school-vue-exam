import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RepoDetailsView from "@/views/RepoDetailsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
    // component: RepoDetailsView,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
