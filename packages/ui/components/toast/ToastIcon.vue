<script setup lang="ts">
import type { ToastIconProps } from "./types";
import { cvaToastIconVariants } from "./cva";
import { injectToastContext } from "./Toast.vue";
import { cn } from "@/lib";

const toastContext = injectToastContext();

const props = withDefaults(defineProps<ToastIconProps>(), {
    decoration: "ring",
    variant: "default",
});

const decoration = computed(() => {
    return props.decoration;
});
const variant = computed(() => {
    return toastContext.variant ? toastContext.variant : props.variant;
});

const icon = computed(() => {
    if (props.icon) {
        return props.icon;
    }
    switch (variant.value) {
        case "error":
            return "alert-circle";
        case "warning":
            return "alert-circle";
        case "success":
            return "check-circle";
        default:
            return "info-circle";
    }
});
</script>

<template>
    <div
        :class="cn(cvaToastIconVariants({
            variant: variant,
            decoration: decoration
        }), props.class)"
        :data-slot="decoration === 'ring' ? 'icon' : 'boxed-icon'"
    >
        <slot :icon="icon">
            <ui-icon :icon="icon" size="sm" />
        </slot>
    </div>
</template>
