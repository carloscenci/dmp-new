import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'DMP',
    title: 'DMP - Mapa de Duelistas',
    htmlAttrs: {
      lang: 'pt-br',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/styles/main.css",
    'normalize.css/normalize.css',
    '@/assets/scss/base.scss'
  ],

  pageTransition: {
    name: "fade",
    mode: "out-in"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/notify.client', mode: 'client' },
    { src: '~plugins/notify.server', mode: 'server' },
    // { src: '~/plugins/vue-google-maps.js', ssr: false, mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  env: {
    // URL_PRINCIPAL: process.env.URL_PRINCIPAL || '/',
  },

  router: {
    // base: process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/"
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.REST_ENDPOINT_SERVER || 'http://localhost:3333',
    // browserBaseURL: process.env.REST_ENDPOINT_CLIENT || 'http://localhost:3333',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      iconSrc: './static/icon.png',
      sizes: [144]
    },
    meta: {
      title: 'DMP',
      author: 'DMP-PROJECTS'
    },
    manifest: {
      name: 'DMP',
      lang: 'pt-br',
      short_name: 'DMP',
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: './config/vuetify.options.js',
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-notifications']
  }
}
