<template>
  <main class="flex h-screen flex-col mt-40">
    <section class="pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <the-headline />
          <!-- <job-search-form /> -->
        </div>

        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img class="h-96 w-96 rounded-full object-cover" :src="image" />
        </div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/RepoSearch/TheHeadline.vue";
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
  },
  data() {
    return {
      interval: null,
      image:
        "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    };
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  created() {
    this.changeImage();
  },
  methods: {
    changeImage() {
      this.interval = setInterval(() => {
        const images = [
          "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
        ];
        this.image = nextElementInList(images, this.image);
      }, 3000);
    },
  },
};
</script>
