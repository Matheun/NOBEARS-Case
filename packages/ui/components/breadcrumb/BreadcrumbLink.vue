<script lang="ts" setup>
import type { BreadcrumbLinkProps } from "./types";
import { cvaBreadcrumbLinkVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<BreadcrumbLinkProps>(), {
    // size: "md",
});

const NuxtLink = resolveComponent("NuxtLink");
</script>

<template>
    <component
        :is="NuxtLink"
        :as-child="asChild"
        :class="cn(cvaBreadcrumbLinkVariants(), props.class)"
        @click="navigateTo(props.to)"
    >
        <slot />
    </component>
</template>
