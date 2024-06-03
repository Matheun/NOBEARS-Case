<script setup lang="ts">
import type { ToastTitleProps } from "./types";
import { cvaToastTitleVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<ToastTitleProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixToastTitle v-bind="delegatedProps" :class="cn(cvaToastTitleVariants(), props.class)" data-slot="title">
        <slot />
    </RadixToastTitle>
</template>
