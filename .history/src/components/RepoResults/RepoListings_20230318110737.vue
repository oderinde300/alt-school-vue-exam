<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <repo-list v-for="repo in displayedRepos" :key="repo.id" repo="repo" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'Repos', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>

          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'Repos', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import RepoList from "@/components/RepoResults/RepoList.vue";

export default {
  name: "RepoListings",
  components: {
    RepoList,
  },
  data() {
    return {
      repos: [],
      filteredRepos: [],
    };
  },

  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },

    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.repos.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedRepos() {
      const pageNumber = this.currentPage; //2
      const firstJobIndex = (pageNumber - 1) * 10; //10
      const lastJobIndex = pageNumber * 10; //20
      return this.repos.slice(firstJobIndex, lastJobIndex);
    },
  },
  mounted() {
    console.log("mounted");
    axios
      .get("https://api.github.com/users/oderinde300/repos")
      .then((response) => {
        this.repos = response.data;
        console.log(this.repos.length);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
