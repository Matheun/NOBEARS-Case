<script setup lang="ts">
import type { SheetHeaderProps } from "./types";
import { cvaSheetHeaderVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SheetHeaderProps>();
</script>

<template>
    <div :class="cn(cvaSheetHeaderVariants(), props.class)">
        <slot />
    </div>
</template>
