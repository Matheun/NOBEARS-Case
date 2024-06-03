<script setup lang="ts">
import type { AlertTitleProps } from "./types";
import { cvaAlertTitleVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<AlertTitleProps>();
</script>

<template>
    <h5 :class="cn(cvaAlertTitleVariants(), props.class)">
        <slot />
    </h5>
</template>
