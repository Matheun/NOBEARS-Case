<script setup lang="ts">
import type { CardProps } from "./types";
import { cvaCardVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<CardProps>(), {
    elevated: true,
});
</script>

<template>
    <div :class="cn(cvaCardVariants({ elevated }), props.class)">
        <slot />
    </div>
</template>
