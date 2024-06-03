<script setup lang="ts">
import type { SeparatorProps } from "./types";
import { cvaSeparatorLineVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<SeparatorProps>(), {
    orientation: "horizontal",
    variant: "primary",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixSeparator
        v-bind="delegatedProps"
        :class="cn(
            cvaSeparatorLineVariants({
                variant: props.variant,
                orientation: props.orientation,
                straightEdges: props.straightEdges,
            }),
            props.class
        )"
    />
</template>
