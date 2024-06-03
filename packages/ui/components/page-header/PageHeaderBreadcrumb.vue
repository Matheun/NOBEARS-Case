<script setup lang="ts">
import type { PageHeaderBreadcrumbProps } from "./types";
import { cvaPageHeaderBreadcrumbVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PageHeaderBreadcrumbProps>();
</script>

<template>
    <div :class="cn(cvaPageHeaderBreadcrumbVariants(), props.class)">
        <slot />
    </div>
</template>
