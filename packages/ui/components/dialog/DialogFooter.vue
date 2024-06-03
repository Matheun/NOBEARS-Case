<script setup lang="ts">
import type { DialogFooterProps } from "./types";
import { cvaDialogFooterVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<DialogFooterProps>();
</script>

<template>
    <div :class="cn(cvaDialogFooterVariants(), props.class)">
        <slot />
    </div>
</template>
