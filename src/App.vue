<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "./components/Navigation/MainNav.vue";
</script>

<template>
  <header>
    <MainNav />
  </header>

  <RouterView />
</template>
