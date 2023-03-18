<template>
  <div class="mt-8">
    <repo-list :repo="repo" />
  </div>

  <router-link to="/repos">
    <action-button class="m-8" text="Back" />
  </router-link>
</template>

<script>
import axios from "axios";
import RepoList from "@/components/RepoResults/RepoList.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "RepoDetailsView",
  components: {
    RepoList,
    ActionButton,
  },
  data() {
    return {
      repos: [],
      repo: {},
    };
  },
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    axios
      .get("https://api.github.com/users/oderinde300/repos")
      .then((response) => {
        this.repos = response.data;
        this.repo = this.repos.find((repo) => repo.id === +this.currentJobId);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
