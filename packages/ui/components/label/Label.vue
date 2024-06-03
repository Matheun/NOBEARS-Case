<script setup lang="ts">
import type { LabelProps } from "./types";
import { cvaLabelVariants } from "./cva";
import { useForwardExpose } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<LabelProps>(), {
    as: "label",
});

useForwardExpose();
</script>

<template>
    <RadixPrimitive
        v-bind="props"
        :class="cn(cvaLabelVariants(), props.class)"
        @mousedown="(event) => {
            // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }"
    >
        <slot />
        <span v-if="props.required" class="text-error-700 -ml-0.5">*</span>
    </RadixPrimitive>
</template>
