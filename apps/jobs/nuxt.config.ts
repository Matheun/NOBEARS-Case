// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    typescript: { includeWorkspace: true },

    imports: { dirs: ["./stores"] },

    extends: ["@nobears-case/ui"],

    app: {
        head: {
            title: "NOBEARS-Case",
        },
    },
});
