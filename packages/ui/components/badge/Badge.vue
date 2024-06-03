<script setup lang="ts">
import type { BadgeProps } from "./types";
import { cvaBadgeVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<BadgeProps>(), {
    variant: "default",
    color: "default",
    rounded: "default",
    size: "md",
});
</script>

<template>
    <div
        :class="cn(cvaBadgeVariants({
            color,
            variant,
            rounded,
            size,
            icon: !!icon,
            prependIcon: !!prependIcon,
            appendIcon: !!appendIcon,
            leadingDot,
        }), props.class)"
    >
        <slot name="prepend">
            <lazy-ui-icon
                v-if="prependIcon && !icon && !appendIcon && !leadingDot"
                :icon="prependIcon"
                size="xxs"
                role="img"
                aria-hidden="true"
                class="text-[--badge-icon-fg] *:stroke-[2.5px]"
            />
            <span v-else-if="leadingDot" class="mx-px size-1.5 rounded-full bg-[--badge-icon-fg]" />
        </slot>
        <slot>
            <span v-if="!icon">{{ props.label }}</span>
            <lazy-ui-icon
                v-if="icon && !appendIcon && !prependIcon"
                :icon="icon"
                size="xxs"
                role="img"
                aria-hidden="true"
                class="text-[--badge-icon-fg] *:stroke-[2.5px]"
            />
        </slot>
        <slot name="append">
            <lazy-ui-icon
                v-if="appendIcon && !icon && !prependIcon"
                :icon="appendIcon"
                size="xxs"
                role="img"
                aria-hidden="true"
                class="text-[--badge-icon-fg] *:stroke-[2.5px]"
            />
        </slot>
    </div>
</template>

<style scoped>
path {
    stroke-width: 2.5px;
}
</style>
