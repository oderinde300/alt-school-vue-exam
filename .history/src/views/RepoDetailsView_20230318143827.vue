<template>
  <repo-list :repo="repo" />
</template>

<script>
import RepoList from "@/components/RepoResults/RepoList.vue";
export default {
  name: "RepoDetailsView",
  components: {
    RepoList,
  },
  data() {
    repo: [],
  },
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    console.log("mounted");
    axios
      .get("https://api.github.com/repos/oderinde300/oderinde300.github.io")
      .then((response) => {
        this.repo = response.data
        console.log(this.repo);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
