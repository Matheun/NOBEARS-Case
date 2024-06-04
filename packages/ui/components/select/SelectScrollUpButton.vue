<script setup lang="ts">
import type { SelectScrollUpButtonProps } from "./types";
import { cvaSelectScrollUpButtonVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<SelectScrollUpButtonProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixSelectScrollUpButton v-bind="forwardedProps" :class="cn(cvaSelectScrollUpButtonVariants(), props.class)">
        <slot>
            <ui-icon icon="chevron-up" size="xs" />
        </slot>
    </RadixSelectScrollUpButton>
</template>
