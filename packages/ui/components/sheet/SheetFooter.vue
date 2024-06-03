<script setup lang="ts">
import type { SheetFooterProps } from "./types";
import { cvaSheetFooterVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SheetFooterProps>();
</script>

<template>
    <div :class="cn(cvaSheetFooterVariants(), props.class,)">
        <slot />
    </div>
</template>
