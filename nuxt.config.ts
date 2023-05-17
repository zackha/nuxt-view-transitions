const imageApi = 'https://movies-proxy.vercel.app';

export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${imageApi}/ipx`,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      imageApi,
    },
  },
});
