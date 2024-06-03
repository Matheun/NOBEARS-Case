<script setup lang="ts">
import type { HoverCardContentProps } from "./types";
import { cvaHoverCardContentVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<HoverCardContentProps>(), {
    sideOffset: 4,
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixHoverCardPortal>
        <RadixHoverCardContent v-bind="forwardedProps" :class="cn(cvaHoverCardContentVariants(), props.class)">
            <slot />
        </RadixHoverCardContent>
    </RadixHoverCardPortal>
</template>
