<script setup lang="ts">
import type { PopoverTriggerProps } from "./types";

const props = defineProps<PopoverTriggerProps>();
</script>

<template>
    <RadixPopoverTrigger v-bind="props">
        <slot />
    </RadixPopoverTrigger>
</template>
