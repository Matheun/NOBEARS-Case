<script setup lang="ts">
import type { SelectTriggerProps } from "./types";
import { cvaSelectTriggerVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<SelectTriggerProps>(), {
    size: "md",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixSelectTrigger
        v-bind="forwardedProps"
        :class="cn(cvaSelectTriggerVariants({ size: props.size}), props.class)"
    >
        <slot />
        <RadixSelectIcon as-child data-slot="chevron-icon">
            <ui-icon icon="chevron-down" size="sm" />
        </RadixSelectIcon>
    </RadixSelectTrigger>
</template>
