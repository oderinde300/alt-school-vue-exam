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
      repo: [],
    };
  },
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
    repoToDisplay() {
      this.repo.find((res) => res.id === this.currentJobId);
    },
  },
  mounted() {
    console.log("mounted");
    axios
      .get("https://api.github.com/repos/oderinde300/oderinde300.github.io")
      .then((response) => {
        this.repo = response.data;
        console.log(this.repo);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
