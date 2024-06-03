<script setup lang="ts">
import type { AspectRatioProps } from "./types";

const props = defineProps<AspectRatioProps>();
</script>

<template>
    <RadixAspectRatio v-bind="props">
        <slot />
    </RadixAspectRatio>
</template>
