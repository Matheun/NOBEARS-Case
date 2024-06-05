// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    typescript: { includeWorkspace: true },

    imports: { dirs: ["./stores"] },

    extends: ["@nobears-case/ui"],

    runtimeConfig: {
        public: {
            appURL: process.env.APP_URL ?? "http://localhost:3001",
            apiURL: process.env.API_URL ?? "https://data.pro-cluster.com",
        },
    },

    app: {
        head: {
            title: "NOBEARS-Case",
        },
    },
});
