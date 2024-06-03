<script setup lang="ts">
import type { DropdownMenuLabelProps } from "./types";
import { cvaDropdownMenuLabelVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<DropdownMenuLabelProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixDropdownMenuLabel
        v-bind="forwardedProps"
        :class="cn(cvaDropdownMenuLabelVariants({ inset: props.inset }), props.class)"
    >
        <slot />
    </RadixDropdownMenuLabel>
</template>
