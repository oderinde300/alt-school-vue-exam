<template></template>

<script>
import RepoList from "@/components/RepoResults/RepoList.vue";
export default {
  name: "RepoDetails",
  components: {
    RepoList,
  },
  data(){
    return {
      repo: {},
    }
  },
  mounted: {
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
  }
}
</script>
