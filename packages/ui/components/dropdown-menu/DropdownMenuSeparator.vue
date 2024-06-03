<script setup lang="ts">
import type { DropdownMenuSeparatorProps } from "./types";
import { cvaDropdownMenuSeparatorVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<DropdownMenuSeparatorProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixDropdownMenuSeparator v-bind="delegatedProps" :class="cn(cvaDropdownMenuSeparatorVariants(), props.class)" />
</template>
