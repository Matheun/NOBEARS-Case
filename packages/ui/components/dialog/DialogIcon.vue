<script setup lang="ts">
import type { DialogIconProps } from "./types";
import { cvaDialogIconVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<DialogIconProps>(), {
    shape: "square",
    color: "default",
});
</script>

<template>
    <div :class="cn(cvaDialogIconVariants({ shape: props.shape, color: props.color}), props.class)">
        <slot>
            <ui-icon :icon="props.icon" size="md" />
        </slot>
        <div
            class="*:border-border-secondary absolute left-[-120px] top-[-120px] -z-10 flex size-[22rem] items-center justify-center *:rounded-full *:border"
            style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, #fff 100%); mask-mode: alpha;"
        />
        <div class="absolute -z-20 flex size-12 items-center justify-center *:rounded-full *:ring-1 *:ring-inset *:ring-[--dialog-icon-line-fg]">
            <div aria-hidden role="presentation" class="absolute size-24" />
            <div aria-hidden role="presentation" class="absolute size-36" />
            <div aria-hidden role="presentation" class="absolute size-48" />
            <div aria-hidden role="presentation" class="absolute size-60" />
            <div aria-hidden role="presentation" class="absolute size-72" />
            <div aria-hidden role="presentation" class="size-84 absolute" />
        </div>
    </div>
</template>
