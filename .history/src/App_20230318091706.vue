<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "./components/Navigation/MainNav.vue";
import RepoList from "./components/RepoResults/RepoList.vue";
</script>

<template>
  <header>
    <MainNav />
    <RepoList />
  </header>

  <RouterView />
</template>
