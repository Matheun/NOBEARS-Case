<script setup lang="ts">
import type { SheetCloseProps } from "./types";

const props = defineProps<SheetCloseProps>();
</script>

<template>
    <RadixDialogClose v-bind="props">
        <slot />
    </RadixDialogClose>
</template>
