<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "./components/Navigation/MainNav.vue";
import RepoListings from "./components/RepoResults/RepoListings.vue";
</script>

<template>
  <header>
    <MainNav />
  </header>

  <RouterView />
</template>
