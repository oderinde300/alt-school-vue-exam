<template>
  <repo-list :repo="repo" />
</template>

<script>
import axios from "axios";
import RepoList from "@/components/RepoResults/RepoList.vue";

export default {
  name: "RepoDetailsView",
  components: {
    RepoList,
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
    repoToDisplay() {
      return this.repos.find((repo) => repo.id === this.currentJobId);
    },
  },
  mounted() {
    console.log("mounted", this.currentJobId);
    axios
      .get("https://api.github.com/users/oderinde300/repos")
      .then((response) => {
        this.repos = response.data;
        this.repo = this.repos.find((repo) => repo.id === this.currentJobId);
        console.log(this.repos);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
