<script setup lang="ts">
import type { PageHeaderHeaderProps } from "./types";
import { cvaPageHeaderHeaderVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PageHeaderHeaderProps>();
</script>

<template>
    <div :class="cn(cvaPageHeaderHeaderVariants(), props.class)">
        <slot />
    </div>
</template>
