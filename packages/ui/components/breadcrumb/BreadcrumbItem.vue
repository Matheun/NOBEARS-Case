<script lang="ts" setup>
import type { BreadcrumbItemProps } from "./types";
import { cvaBreadcrumbItemVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<BreadcrumbItemProps>();
</script>

<template>
    <li :class="cn(cvaBreadcrumbItemVariants(), props.class)">
        <slot />
    </li>
</template>
