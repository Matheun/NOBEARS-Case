<script setup lang="ts">
import type { CardDescriptionProps } from "./types";
import { cvaCardDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<CardDescriptionProps>();
</script>

<template>
    <div :class="cn(cvaCardDescriptionVariants(), props.class)">
        <slot />
    </div>
</template>
