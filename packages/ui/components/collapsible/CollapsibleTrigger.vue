<script setup lang="ts">
import type { CollapsibleTriggerProps } from "./types";

const props = defineProps<CollapsibleTriggerProps>();
</script>

<template>
    <RadixCollapsibleTrigger v-bind="props">
        <slot />
    </RadixCollapsibleTrigger>
</template>
