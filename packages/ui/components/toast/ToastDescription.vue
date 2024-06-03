<script setup lang="ts">
import type { ToastDescriptionProps } from "./types";
import { cvaToastDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<ToastDescriptionProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixToastDescription v-bind="delegatedProps" :class="cn(cvaToastDescriptionVariants(), props.class)" data-slot="description">
        <slot />
    </RadixToastDescription>
</template>
