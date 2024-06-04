<script setup lang="ts">
import type { SelectValueProps } from "./types";

const props = defineProps<SelectValueProps>();
</script>

<template>
    <RadixSelectValue v-bind="props">
        <slot />
    </RadixSelectValue>
</template>
