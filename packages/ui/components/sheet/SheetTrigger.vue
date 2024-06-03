<script setup lang="ts">
import type { SheetTriggerProps } from "./types";

const props = defineProps<SheetTriggerProps>();
</script>

<template>
    <RadixDialogTrigger v-bind="props">
        <slot />
    </RadixDialogTrigger>
</template>
