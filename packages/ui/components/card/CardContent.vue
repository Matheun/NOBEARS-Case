<script setup lang="ts">
import type { CardContentProps } from "./types";
import { cvaCardContentVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CardContentProps>();
</script>

<template>
    <div :class="cn(cvaCardContentVariants(), props.class)">
        <slot />
    </div>
</template>
