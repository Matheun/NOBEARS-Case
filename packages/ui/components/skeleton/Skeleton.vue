<script setup lang="ts">
import type { SkeletonProps } from "./types";
import { cvaSkeletonVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SkeletonProps>();
</script>

<template>
    <div :class="cn(cvaSkeletonVariants(), props.class)" />
</template>
