<script setup lang="ts">
import type { CardHeaderProps } from "./types";
import { cvaCardHeaderVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CardHeaderProps>();
</script>

<template>
    <div :class="cn(cvaCardHeaderVariants(), props.class)">
        <slot />
    </div>
</template>
