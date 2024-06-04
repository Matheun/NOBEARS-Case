<script setup lang="ts">
import type { SelectItemProps } from "./types";
import { cvaSelectItemVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<SelectItemProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixSelectItem
        v-bind="forwardedProps"
        :class="
            cn(
                cvaSelectItemVariants(),
                props.class,
            )
        "
    >
        <ui-select-item-indicator />

        <RadixSelectItemText>
            <slot />
        </RadixSelectItemText>
    </RadixSelectItem>
</template>
