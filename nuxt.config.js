require('dotenv').config();

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=cyrillic',
      },
    ],
  },
  /*
   ** Devtools
   */
  devtools: true,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/config.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vue-moments' },],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCJYylSWsZFlMJthUIjyMxVJBnjAaSWQ0k',
          authDomain: 'vue-firebase-c2b20.firebaseapp.com',
          databaseURL: 'https://vue-firebase-c2b20.firebaseio.com',
          projectId: 'vue-firebase-c2b20',
          storageBucket: 'vue-firebase-c2b20.appspot.com',
          messagingSenderId: '30913046473',
          appId: '1:30913046473:web:dfccf8e543ad4c2cfa2a18',
          measurementId: 'G-L099VJQDXN',
        },
        services: {
          firestore: true,
          auth: false, // Just as example. Can be any other service.
        },
      },
    ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'uk',
            iso: 'uk-UK',
            file: 'uk.js',
            name: 'uk',
          },
        ],
        detectBrowserLanguage: false,
        lazy: true,
        langDir: 'locales/',
        baseUrl: 'http://localhost:' + process.env.PORT,
        seo: false,
        defaultLocale: 'uk',
      },
    ],
    [
      'nuxt-svg-sprite-module',
      {
        directory: '~/static/icons',
        options: {
          dest: './static/',
          mode: {
            css: false,
            view: true,
            defs: false,
            symbol: true,
            stack: true,
          },
        },
      },
    ],
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
      },
    ],
    // ['@nuxtjs/style-resources']
  ],
  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
  },
  purgeCSS: {
    enabled: ({ isDev, isClient }) => !isDev && isClient, // or `false` when in dev/debug mode
    paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js'],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:\\/]+/g);
          }
        },
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // styleResources: {
  //   // scss: './assets/variables.scss',
  //   // less: './assets/*.less',
  //   //
  //   // sass: ...,
  //   // scss: ...
  //   options: {
  //     // See https://github.com/yenshih/style-resources-loader#options
  //     // Except `patterns` property
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'source-map';
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
