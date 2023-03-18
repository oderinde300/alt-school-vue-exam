<template>
  <h1>Job Listings</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      repos: [],
      filteredRepos: [],
      // organizations: [],
      // locations: [],
      // selectedOrganization: "",
      // selectedLocation: "",
    };
  },
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
    ...mapState(useJobsStore, {
      FILTERED_JOBS_BY_ORGANIZATIONS,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxPage = Math.ceil(
          this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10
        );
        return nextPage <= maxPage ? nextPage : undefined;
      },
      displayedJobs() {
        const pageNumber = this.currentPage; //2
        const firstJobIndex = (pageNumber - 1) * 10; //10
        const lastJobIndex = pageNumber * 10; //20
        return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(
          firstJobIndex,
          lastJobIndex
        );
      },
    }),
  },
  async mounted() {
 const response =  await axios.get("https://jobs.github.com/positions.json")
const data = response.JSON();
consoe.log(data)

  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
