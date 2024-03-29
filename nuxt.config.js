const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "AcmeElectricalServices",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: "#FFFFFF" },
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  css: [
    "less-loader",
    "vuetify/src/stylus/main.styl",
    "~/assets/style/app.styl",
    "@/assets/css/index.less"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vuetify", "@/plugins/firebase", { src: '~/plugins/particles', ssr: false}],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
