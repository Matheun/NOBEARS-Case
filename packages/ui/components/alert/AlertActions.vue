<script setup lang="ts">
import type { AlertActionsProps } from "./types";
import { cvaAlertActionsVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<AlertActionsProps>();
</script>

<template>
    <div :class="cn(cvaAlertActionsVariants(), props.class)">
        <slot />
    </div>
</template>
