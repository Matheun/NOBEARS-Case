<script setup lang="ts">
import type { LogoProps } from "./types";

const props = withDefaults(defineProps<LogoProps>(), {
    theme: "light",
    variant: "icon",
});

const logoSrc = computed(() => {
    return `/logo/NOBEARS-icon${props.theme === "dark" ? "-white" : ""}.png`;
});

const logoWidth = computed(() => {
    if (props.variant === "icon" && !props.width) {
        return "34px";
    }
    return props.width;
});

const logoHeight = computed(() => {
    if (props.variant === "icon" && !props.height) {
        return "40px";
    }
    return props.height;
});

const logoPlaceholder = computed(() => {
    if (props.variant === "icon") {
        return [props.width && 34, props.height && 40];
    }
    return props.placeholder;
});
</script>

<template>
    <NuxtPicture
        format="avif,webp"
        :src="logoSrc"
        preload
        :height="logoHeight"
        :width="logoWidth"
        densities="x1 x2"
        :placeholder="logoPlaceholder"
    />
</template>
