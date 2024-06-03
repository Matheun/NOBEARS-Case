<script setup lang="ts">
import type { CardFooterProps } from "./types";
import { cvaCardFooterVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CardFooterProps>();
</script>

<template>
    <div :class="cn(cvaCardFooterVariants(), props.class)">
        <slot />
    </div>
</template>
