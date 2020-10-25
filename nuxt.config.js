const SurreyJamConfig = require('./config/app');

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'SurreyJam',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~assets/global.scss"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Loading module configuration (https://nuxtjs.org/api/configuration-loading/)
    loading: {
        color: '#5BDEFF'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    // Server Configuration
    server: {
        port: 2140
    },

    // SurreyJam App Configuration
    env: {
        app: SurreyJamConfig
    }
}
