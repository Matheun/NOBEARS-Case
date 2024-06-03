<script lang="ts" setup>
import type { BreadcrumbListProps } from "./types";
import { cvaBreadcrumbListVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<BreadcrumbListProps>();
</script>

<template>
    <ul :class="cn(cvaBreadcrumbListVariants(), props.class)">
        <slot />
    </ul>
</template>
