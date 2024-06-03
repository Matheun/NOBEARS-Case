<script setup lang="ts">
import type { DialogHeaderProps } from "./types";
import { cvaDialogHeaderVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<DialogHeaderProps>();
</script>

<template>
    <div :class="cn(cvaDialogHeaderVariants(), props.class)">
        <slot />
    </div>
</template>
