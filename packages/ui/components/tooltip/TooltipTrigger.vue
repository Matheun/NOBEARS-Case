<script setup lang="ts">
import type { TooltipTriggerProps } from "./types";

const props = defineProps<TooltipTriggerProps>();
</script>

<template>
    <RadixTooltipTrigger v-bind="props">
        <slot />
    </RadixTooltipTrigger>
</template>
