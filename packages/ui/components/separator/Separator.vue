<script setup lang="ts">
import type { SeparatorProps } from "./types";
import { cvaSeparatorVariants } from "./cva";
import { cn } from "@/lib";

const slots = useSlots();
const props = withDefaults(defineProps<SeparatorProps>(), {
    orientation: "horizontal",
    variant: "primary",
    contentType: "text",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <div
        :class="cn(
            cvaSeparatorVariants({
                variant: props.variant,
                orientation: props.orientation,
                hasContent: slots.default !== undefined,
                contentType: props.contentType,
            }),
            props.class
        )"
    >
        <ui-separator-line v-bind="delegatedProps" />
        <template v-if="props.orientation === 'horizontal'">
            <div v-if="slots.default">
                <slot />
            </div>
            <ui-separator-line v-if="slots.default" v-bind="delegatedProps" />
        </template>
    </div>
</template>
