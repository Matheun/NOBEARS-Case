<script setup lang="ts">
import type { ToastActionProps } from "./types";
import { cvaToastActionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<ToastActionProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixToastAction v-bind="delegatedProps" :class="cn(cvaToastActionVariants(), props.class)" data-slot="action">
        <slot />
    </RadixToastAction>
</template>
