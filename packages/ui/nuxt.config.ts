import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    modules: [
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module",
        "@nuxtjs/device",
        "@vueuse/nuxt",
        "@vee-validate/nuxt",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "v-wave/nuxt",
        "nuxt-viewport",
        // "magic-regexp/nuxt", Causes typescript error in TooltipContent for some reason
        "radix-vue/nuxt",
        "nuxt-icon",
    ],

    tailwindcss: {
        cssPath: join(currentDir, "./assets/styles/vendors/tailwind.scss"),
        editorSupport: true,
    },

    eslint: {
        lintOnStart: false,
        emitWarning: false,
        emitError: false,
    },

    vWave: {
        directive: "ripple",
        duration: 0.3,
    },

    viewport: {
        breakpoints: {
            desktop: 1024,
            desktopMedium: 1280,
            desktopWide: 1600,

            mobile: 320,
            mobileMedium: 375,
            mobileWide: 425,

            tablet: 768,

            xs: 384,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1400,
        },

        cookie: {
            expires: 365, // 365 days
            name: "viewport",
            path: "/",
            sameSite: "Strict",
            secure: true,
        },

        defaultBreakpoints: {
            desktop: "desktop",
            mobile: "mobile",
            tablet: "tablet",
        },

        fallbackBreakpoint: "desktop",
    },

    radix: {
        prefix: "Radix",
    },

    components: [
        {
            path: join(currentDir, "./components"),
            // this is required else Nuxt will autoImport `.ts` file
            extensions: [".vue"],
            // prefix for your components, eg: UiButton or ui-button
            prefix: "Ui",
        },
    ],

    veeValidate: {
        // disable or enable auto imports
        autoImports: false,
    },

    pinia: {
        autoImports: ["defineStore", "acceptHMRUpdate"],
    },

    piniaPersistedstate: {
        cookieOptions: {
            sameSite: "strict",
        },
        storage: "localStorage",
    },

    // vue: {
    //     compilerOptions: {
    //         isCustomElement: tag => tag === "iconify-icon",
    //     },
    // },

    // nuxtIcon: {
    //     // ...

    //     iconifyApiOptions: {

    //         url: "http://127.0.0.1:3002",
    //         publicApiFallback: false, // default: false
    //     },
    // },

    typescript: {
        includeWorkspace: true,
    },

    app: {
        head: {
            title: "NOBEARS-Case UI Layer",
            htmlAttrs: {
                lang: "nl",
            },
            link: [
                {
                    rel: "stylesheet",
                    href: "/fonts/Inter/inter.css",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "160x160x",
                    href: "/logo/NOBEARS-icon.png",
                },
            ],
        },
    },
});
