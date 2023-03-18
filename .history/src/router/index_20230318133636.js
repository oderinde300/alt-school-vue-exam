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
    // {
    //   path: "/repos/:id",
    //   name: "RepoDetails",
    //   //lazy loading
    //   component: () => import("../views/RepoDetailsView.vue"),
    // },
    {
      path: "/repos/:id",
      component: ReportDetailsView,
      // children: [
      //   {
      //     // UserProfile will be rendered inside User's <router-view>
      //     // when /user/:id/profile is matched
      //     path: 'profile',
      //     component: UserProfile,
      //   },
      //   {
      //     // UserPosts will be rendered inside User's <router-view>
      //     // when /user/:id/posts is matched
      //     path: 'posts',
      //     component: UserPosts,
      //   },
      // ],
    },
  ],
});

export default router;
