<script setup lang="ts">
import type { SelectItemIndicatorProps } from "./types";
import { cvaSelectItemIndicatorVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SelectItemIndicatorProps>();
</script>

<template>
    <span :class="cn(cvaSelectItemIndicatorVariants(), props.class)">
        <RadixSelectItemIndicator>
            <ui-icon icon="check" size="xs" />
        </RadixSelectItemIndicator>
    </span>
</template>
