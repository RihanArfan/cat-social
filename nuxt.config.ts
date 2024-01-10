// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
  ],

  googleFonts: {
    families: {
      Mansalva: true,
    },
    subsets: "latin",
  },

  experimental: {
    typedPages: true,
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
