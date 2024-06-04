<script setup lang="ts">
import type { SelectItemTextProps } from "./types";

const props = defineProps<SelectItemTextProps>();
</script>

<template>
    <RadixSelectItemText v-bind="props">
        <slot />
    </RadixSelectItemText>
</template>
