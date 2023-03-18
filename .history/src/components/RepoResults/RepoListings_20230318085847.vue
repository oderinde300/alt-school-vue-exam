<template>
  <h1>Job Listings</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "RepoListings",
  components: {},
  data() {
    return {
      repos: [],
      filteredRepos: [],
    };
  },

  // computed: {
  //   currentPage() {
  //     return Number.parseInt(this.$route.query.page || "1");
  //   },
  //   previousPage() {
  //     const previousPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return previousPage >= firstPage ? previousPage : undefined;
  //   },

  //     nextPage() {
  //       const nextPage = this.currentPage + 1;
  //       const maxPage = Math.ceil(
  //         this.repos.length / 10
  //       );
  //       return nextPage <= maxPage ? nextPage : undefined;
  //     },
  //     displayedRepos() {
  //       const pageNumber = this.currentPage; //2
  //       const firstJobIndex = (pageNumber - 1) * 10; //10
  //       const lastJobIndex = pageNumber * 10; //20
  //       return this.repos.slice(
  //         firstJobIndex,
  //         lastJobIndex
  //       );
  //     },
  // },
  mounted() {
    axios
      .get("https://api.github.com/users/oderinde300/repos")
      .then((response) => {
        this.repos = response.JSON();
        console.log(this.repos);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
