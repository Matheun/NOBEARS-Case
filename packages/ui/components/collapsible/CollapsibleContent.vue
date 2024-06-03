<script setup lang="ts">
import type { CollapsibleContentProps } from "./types";
import { cvaCollapsibleContentVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CollapsibleContentProps>();
</script>

<template>
    <RadixCollapsibleContent v-bind="props" :class="cn(cvaCollapsibleContentVariants(), props.class)">
        <slot />
    </RadixCollapsibleContent>
</template>
