<script setup lang="ts">
const route = useRoute();

const navLinks = ref([
    {
        label: "Vacatures",
        pageName: "index",
        to: "/",
    },
    {
        label: "Over ons",
        pageName: "external",
        to: "https://nobearsgroup.com/nl/over-ons",
    },
]);

const nuxtLink = resolveComponent("NuxtLink");
</script>

<template>
    <div class="bg-background-primary border-border-secondary border-b">
        <nav class="container flex items-center justify-between px-8 py-4">
            <ui-logo />
            <div>
                <RadixPrimitive
                    v-for="(link, index) in navLinks"
                    :key="index"
                    :as="nuxtLink"
                    :to="link.to"
                >
                    <ui-button
                        :label="link.label"
                        variant="text"
                        :color="route.name === link.pageName ? 'brand' : 'default'"
                    />
                </RadixPrimitive>
            </div>
        </nav>
    </div>
</template>
