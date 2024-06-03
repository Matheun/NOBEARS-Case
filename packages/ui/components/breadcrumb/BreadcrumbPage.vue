<script lang="ts" setup>
import type { BreadcrumbPageProps } from "./types";
import { cvaBreadcrumbPageVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<BreadcrumbPageProps>();
</script>

<template>
    <span
        role="link"
        aria-disabled="true"
        aria-current="page"
        :class="cn(cvaBreadcrumbPageVariants(), props.class)"
    >
        <slot />
    </span>
</template>
