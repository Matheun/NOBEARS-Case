<script setup lang="ts">
import type { PageHeaderProps } from "./types";
import { cvaPageHeaderVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PageHeaderProps>();
</script>

<template>
    <div :class="cn(cvaPageHeaderVariants(), props.class)">
        <slot />
    </div>
</template>
