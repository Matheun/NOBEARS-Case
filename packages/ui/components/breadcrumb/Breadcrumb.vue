<script lang="ts">
import { createContext, cn } from "@/lib";
import type { BreadcrumbProps, BreadcrumbContext } from "./types";

export const [injectBreadcrumbContext, provideBreadcrumbContext] = createContext<BreadcrumbContext>("BreadcrumbContext");
</script>

<script lang="ts" setup>
import { cvaBreadcrumbVariants } from "./cva";

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    separator: "chevron",
});

provideBreadcrumbContext({
    separator: props.separator,
});
</script>

<template>
    <nav aria-label="breadcrumb" :class="cn(cvaBreadcrumbVariants(), props.class)">
        <slot />
    </nav>
</template>
