<script setup lang="ts">
import type { SheetTitleProps } from "./types";
import { cvaSheetTitleVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SheetTitleProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixDialogTitle
        :class="cn(cvaSheetTitleVariants(), props.class)"
        v-bind="delegatedProps"
    >
        <slot />
    </RadixDialogTitle>
</template>
