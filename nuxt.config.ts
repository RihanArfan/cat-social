// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxthq/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
  ],

  googleFonts: {
    families: {
      Mansalva: true,
    },
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
