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
          <p v-if="!repo.private">Public</p>
          <p v-if="repo.private">Private</p>
        </div>

        <div class="flex flex-row align-middle">
          <div>{{ repo.id }}</div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Link:</h3>
          <div>
            <a :href="repo.html_url" class="text-blue-500 cursor-pointer">{{
              repo.html_url
            }}</a>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Forked from:</h3>
          <div>
            <p>{{ repo.forks_url }}</p>
          </div>
        </div>

        <div>
          <h3 class="mt-1 mb-2">Description:</h3>
          <div>
            <p>{{ repo.description || "Description Not Available" }}</p>
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
      return `/repos/562576092`;
    },
  },
};
</script>
