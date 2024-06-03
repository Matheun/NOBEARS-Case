<script lang="ts">
import { createContext, cn } from "@/lib";
import type { AlertProps, AlertVariants } from "./types";

export const [injectAlertContext, provideAlertContext] = createContext<{
    variant?: AlertVariants;
}>("AlertContext");
</script>

<script setup lang="ts">
import { cvaAlertVariants } from "./cva";

const props = withDefaults(defineProps<AlertProps>(), {
    variant: "default",
});
provideAlertContext({
    variant: props.variant,
});
</script>

<template>
    <div :class="cn(cvaAlertVariants({ variant }), props.class)" role="alert">
        <slot />
    </div>
</template>
