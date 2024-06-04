<script setup lang="ts">
import type { SelectLabelProps } from "./types";
import { cvaSelectItemLabelVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SelectLabelProps>();
</script>

<template>
    <RadixSelectLabel :class="cn(cvaSelectItemLabelVariants(), props.class)">
        <slot />
    </RadixSelectLabel>
</template>
