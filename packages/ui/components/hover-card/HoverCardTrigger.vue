<script setup lang="ts">
import type { HoverCardTriggerProps } from "./types";

const props = defineProps<HoverCardTriggerProps>();
</script>

<template>
    <RadixHoverCardTrigger v-bind="props">
        <slot />
    </RadixHoverCardTrigger>
</template>
