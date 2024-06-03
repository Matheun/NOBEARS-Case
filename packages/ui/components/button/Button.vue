<script setup lang="ts">
import type { ButtonProps } from "./types";
import { cvaButtonVariants } from "./cva";
import { cn } from "@/lib";

const attrs = useAttrs();
const props = withDefaults(defineProps<ButtonProps>(), {
    variant: "default",
    color: "default",
    size: "md",
    type: "button",
    as: "button",
});

const ariaLabel = computed(() => {
    return attrs.ariaLabel ? attrs.ariaLabel : props.label;
});

const disabled = computed(() => {
    return attrs.disabled || attrs["aria-disabled"] || props.disabled;
});

const iconSize = computed(() => {
    if (props.size === "xs") { return "xs"; }
    if (props.size === "2xl") { return "lg"; }
    if (["lg", "xl"].includes(props.size as string)) { return "md"; }
    return "sm";
});

const iconOnlySize = computed(() => {
    if (props.size === "xs") { return "xs"; }
    if (props.size === "2xl") { return "lg"; }
    if (["lg", "xl"].includes(props.size as string)) { return "md"; }
    return "sm";
});

const ripple = computed(() => {
    return props.variant !== "plain";
});

const progressSpinnerColor = computed(() => {
    if (disabled.value) { return "default"; }
    if (props.variant === "default") { return "white"; }

    return props.color;
});
</script>

<template>
    <component
        :is="as"
        v-ripple="ripple"
        :aria-label="ariaLabel"
        :aria-disabled="disabled"
        :disabled="disabled"
        :class="cn(cvaButtonVariants({
            variant,
            color,
            size,
            iconOnly: !!icon || props.variant === 'close',
            block
        }), attrs.class ?? '')"
    >
        <slot name="prepend">
            <lazy-ui-icon
                v-if="prependIcon && !icon"
                :icon="prependIcon"
                :size="iconSize"
                role="img"
                aria-hidden="true"
            />
        </slot>
        <slot>
            <span v-if="icon || props.variant === 'close'" class="sr-only">{{ label }}</span>
            <lazy-ui-icon
                v-if="icon || props.variant === 'close'"
                :icon="icon || 'x-close'"
                :size="iconOnlySize"
                role="img"
                aria-hidden="true"
            />

            <span v-else-if="label">{{ label }}</span>
        </slot>

        <slot v-if="loading && !disabled" name="loader">
            <span
                :class="`
                    absolute left-0 top-0 z-20 flex size-full items-center justify-center rounded-[inherit] cursor-progress
                    before:absolute before:inset-0 before:-z-10 before:rounded-lg-inset before:bg-[--btn-bg] before:opacity-90
                `"
            >
                <lazy-ui-progress-spinner :color="progressSpinnerColor" />
            </span>
        </slot>
        <slot name="append">
            <lazy-ui-icon
                v-if="appendIcon && !icon"
                :icon="appendIcon"
                :size="iconSize"
                role="img"
                aria-hidden="true"
            />
        </slot>
    </component>
</template>
