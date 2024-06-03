<script setup lang="ts">
import type { PageHeaderDescriptionProps } from "./types";
import { cvaPageHeaderDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PageHeaderDescriptionProps>();
</script>

<template>
    <p :class="cn(cvaPageHeaderDescriptionVariants(), props.class)">
        <slot />
    </p>
</template>
