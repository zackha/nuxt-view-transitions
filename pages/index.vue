<script setup lang="ts">
await new Promise((resolve) => setTimeout(resolve, 10));
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="font-bold text-lg">Home</h1>
    <p>Welcome to View Transitions in Nuxt!</p>
    <p>
      This demo will only work (at the moment) in Google Chrome, so you might
      need to change browsers before clicking around.
    </p>
    <p>
      Read more
      <NuxtLink class="font-bold text-green-600 hover:underline" to="/about">
        about View Transitions </NuxtLink
      >, or try clicking on one of these images:
    </p>
    <hr class="my-4 w-6 mx-auto" />
    <ImageGallery />
  </div>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
