<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "./components/Navigation/MainNav.vue";
import RepoList from "@/components/RepoResults/ReopList.vue";
import RepoListings from "@/components/RepoResults/RepoListings.vue";
</script>

<template>
  <header>
    <MainNav />
    <RepoList />
    <!-- <RepoListings /> -->
  </header>

  <RouterView />
</template>
