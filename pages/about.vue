<template>
  <div class="flex flex-col gap-3 items-center">
    <h1 class="font-bold text-lg">About</h1>
    <p>
      Cross-fade is the default transition but you can customise all of this
      with CSS, of course.
    </p>
    <p>
      Guess what? That swiping header was not the same element - the browser
      automatically animated two separate elements across pages once we told it
      they were meant to be the 'same.'
    </p>
    <hr class="my-8 w-6 mx-auto" />
    <p>
      You can
      <NuxtLink
        class="font-bold text-green-600 hover:underline"
        to="https://developer.chrome.com/docs/web-platform/view-transitions"
        target="_blank"
      >
        read more about View Transitions </NuxtLink
      >.
    </p>
    <p>
      ... try out some
      <NuxtLink
        class="font-bold text-green-600 hover:underline"
        to="https://glitch.com/edit/#!/simple-set-demos"
        target="_blank"
        >non-Nuxt demos</NuxtLink
      >...
    </p>
    <p>
      ... or
      <NuxtLink class="font-bold text-green-600 hover:underline" to="/">
        go back
      </NuxtLink>
      to the previous page.
    </p>
    <hr class="my-8 w-6 mx-auto" />
    <NuxtLink to="https://nuxt.com" target="_blank">
      <img
        class="h-10 self-center"
        src="https://nuxt.com/assets/design-kit/logo/icon-green.svg"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
