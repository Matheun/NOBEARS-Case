<script setup lang="ts">
import type { TooltipProps, TooltipEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<TooltipProps>();
const emits = defineEmits<TooltipEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixTooltipRoot v-bind="forwarded">
        <slot />
    </RadixTooltipRoot>
</template>
