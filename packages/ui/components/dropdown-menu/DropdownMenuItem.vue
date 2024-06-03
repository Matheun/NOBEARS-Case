<script setup lang="ts">
import type { DropdownMenuItemProps } from "./types";
import { cvaDropdownMenuItemVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const slots = useSlots();
const props = defineProps<DropdownMenuItemProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixDropdownMenuItem
        v-bind="forwardedProps"
        :class="cn(cvaDropdownMenuItemVariants({ inset: props.inset}), props.class)"
    >
        <RadixPrimitive
            v-if="!!props.icon || slots.icon"
            as="template"
            data-slot="icon"
            class="text-foreground-quaternary"
            role="img"
            aria-hidden
        >
            <slot name="icon">
                <ui-icon
                    v-if="!!props.icon"
                    :icon="props.icon"
                    size="xs"
                />
            </slot>
        </RadixPrimitive>
        <slot>
            <span v-if="!!props.label">{{ props.label }}</span>
        </slot>
        <RadixPrimitive
            v-if="!!props.shortcut || slots.shortcut"
            as="template"
            data-slot="shortcut"
        >
            <slot name="shortcut">
                <ui-dropdown-menu-shortcut v-if="!!props.shortcut" :shortcut="props.shortcut" />
            </slot>
        </RadixPrimitive>
    </RadixDropdownMenuItem>
</template>
