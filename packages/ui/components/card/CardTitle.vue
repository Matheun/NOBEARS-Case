<script setup lang="ts">
import type { CardTitleProps } from "./types";
import { cvaCardTitleVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CardTitleProps>();
</script>

<template>
    <div :class="cn(cvaCardTitleVariants(), props.class)">
        <slot />
    </div>
</template>
