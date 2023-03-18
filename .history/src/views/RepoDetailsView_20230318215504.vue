<template>
  <repo-list :repo="repoToDisplay" />
</template>

<script>
import RepoList from "@/components/RepoResults/RepoList.vue";
export default {
  name: "RepoDetailsView",
  components: {
    RepoList,
  },
  data() {
    return {
      repos: [],
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
      .get("https://api.github.com/repos/oderinde300/oderinde300.github.io")
      .then((response) => {
        this.repos = response.data;
        console.log(this.repos);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
