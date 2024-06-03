<script setup lang="ts">
import type { ToastProviderProps } from "./types";

const props = defineProps<ToastProviderProps>();
</script>

<template>
    <RadixToastProvider v-bind="props">
        <slot />
    </RadixToastProvider>
</template>
