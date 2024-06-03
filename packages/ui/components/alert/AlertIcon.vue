<script setup lang="ts">
import type { AlertIconProps } from "./types";
import { cvaAlertIconVariants } from "./cva";
import { injectAlertContext } from "./Alert.vue";
import { cn } from "@/lib";

const alertContext = injectAlertContext();

const props = withDefaults(defineProps<AlertIconProps>(), {
    decoration: "ring",
});

const icon = computed(() => {
    if (props.icon) {
        return props.icon;
    }
    switch (props.variant) {
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

const variant = computed(() => {
    return alertContext.variant ? alertContext.variant : props.variant;
});
</script>

<template>
    <div
        :class="cn(cvaAlertIconVariants({
            variant: variant,
            decoration: props.decoration
        }), props.class)"
        :data-slot="props.decoration === 'ring' ? 'icon' : 'boxed-icon'"
    >
        <slot :icon="icon">
            <ui-icon :icon="icon" size="sm" />
        </slot>
    </div>
</template>
