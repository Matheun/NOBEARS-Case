<script setup lang="ts">
import type { PageHeaderActionsProps } from "./types";
import { cvaPageHeaderActionsVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PageHeaderActionsProps>();
</script>

<template>
    <div :class="cn(cvaPageHeaderActionsVariants(), props.class)">
        <slot />
    </div>
</template>
