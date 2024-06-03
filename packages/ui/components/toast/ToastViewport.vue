<script setup lang="ts">
import type { ToastViewportProps } from "./types";
import { cvaToastViewportVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<ToastViewportProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixToastViewport v-bind="delegatedProps" :class="cn(cvaToastViewportVariants(), props.class)" />
</template>
