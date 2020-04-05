# starter-pack

> My brilliant Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

How to enable TailwindCSS:

**Run command:**
```
$ npm install --save-dev @nuxtjs/tailwindcss
```

uncomment this line in `nuxt.config.js` in Modules<br>
$ @nuxtjs/tailwindcss

Uncomment theese lines in `nuxt.config.js`<br>
```
tailwindcss: {
  configPath: '~/config/tailwind.config.js',
  cssPath: '~/assets/css/tailwind.css',
  purgeCSSInDev: false,
},
```