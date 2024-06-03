<script setup lang="ts">
import type { AlertDescriptionProps } from "./types";
import { cvaAlertDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<AlertDescriptionProps>();
</script>

<template>
    <div :class="cn(cvaAlertDescriptionVariants(), props.class)">
        <slot />
    </div>
</template>
