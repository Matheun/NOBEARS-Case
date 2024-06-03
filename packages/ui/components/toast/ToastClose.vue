<script setup lang="ts">
import type { ToastCloseProps } from "./types";
import { cvaToastCloseVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<ToastCloseProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixToastClose
        v-bind="delegatedProps"
        :class="cn(cvaToastCloseVariants(), props.class)"
        as-child
        aria-label="Close"
    >
        <slot>
            <ui-button variant="close" class="absolute right-2 top-2" size="sm" />
            <span class="sr-only">Close</span>
        </slot>
    </RadixToastClose>
</template>
