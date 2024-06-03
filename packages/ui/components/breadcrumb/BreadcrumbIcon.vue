<script lang="ts" setup>
import type { BreadcrumbIconProps } from "./types";
import { cvaBreadcrumbIconVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<BreadcrumbIconProps>();
</script>

<template>
    <ui-icon :class="cn(cvaBreadcrumbIconVariants(), props.class)" size="sm" />
</template>
