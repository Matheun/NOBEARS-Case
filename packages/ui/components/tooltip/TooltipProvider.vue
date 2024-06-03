<script setup lang="ts">
import type { TooltipProviderProps } from "./types";

const props = defineProps<TooltipProviderProps>();
</script>

<template>
    <RadixTooltipProvider v-bind="props">
        <slot />
    </RadixTooltipProvider>
</template>
