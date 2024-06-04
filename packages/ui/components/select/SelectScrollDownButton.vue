<script setup lang="ts">
import type { SelectScrollDownButtonProps } from "./types";
import { cvaSelectScrollDownButtonVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<SelectScrollDownButtonProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixSelectScrollDownButton v-bind="forwardedProps" :class="cn(cvaSelectScrollDownButtonVariants(), props.class)">
        <slot>
            <ui-icon icon="chevron-down" size="xs" />
        </slot>
    </RadixSelectScrollDownButton>
</template>
