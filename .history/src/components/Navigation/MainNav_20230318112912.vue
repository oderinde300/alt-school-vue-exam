<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >Emma Repos
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <!-- <profile-image /> -->
          <action-button v-if="isLoggedIn" text="Sign In" />
          <action-button v-if="!isLoggedIn" text="Sign Out" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      menuItems: [
        { text: "Repos", url: "/repos" },
        { text: "Locations", url: "/" },
        { text: "Life at Lite Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loggedIn() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
