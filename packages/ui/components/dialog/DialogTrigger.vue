<script setup lang="ts">
import type { DialogTriggerProps } from "./types";

const props = defineProps<DialogTriggerProps>();
</script>

<template>
    <RadixDialogTrigger v-bind="props">
        <slot />
    </RadixDialogTrigger>
</template>
