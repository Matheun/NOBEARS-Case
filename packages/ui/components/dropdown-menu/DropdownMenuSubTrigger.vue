<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from "./types";
import { cvaDropdownMenuSubTriggerVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<DropdownMenuSubTriggerProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixDropdownMenuSubTrigger
        v-bind="forwardedProps"
        :class="cn(cvaDropdownMenuSubTriggerVariants(), props.class)"
    >
        <slot />
        <ui-icon icon="chevron-right" class="ml-auto size-4" />
    </RadixDropdownMenuSubTrigger>
</template>
