<template>
  <li class="mb-7">
    <router-link
      :to="repoPageLink"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <div class="flex items-center justify-between">
          <h2 class="mb-2 text-2xl">
            {{ repo.name }}
          </h2>
          <p v-if="repo.private">Public</p>
        </div>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <!-- <span>{{ job.organization }}</span> -->
          </div>

          <div>
            <!-- <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                {{ location }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <!-- <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul> -->
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link :to="repoPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "RepoList",
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    repoPageLink() {
      return `/repos`;
    },
  },
};
</script>
