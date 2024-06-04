<script setup lang="ts">
import type { SelectSeparatorProps } from "./types";
import { cvaSelectSeparatorVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SelectSeparatorProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixSelectSeparator v-bind="delegatedProps" :class="cn(cvaSelectSeparatorVariants(), props.class)" />
</template>
