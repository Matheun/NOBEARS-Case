<script setup lang="ts">
import type { SheetDescriptionProps } from "./types";
import { cvaSheetDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SheetDescriptionProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixDialogDescription
        :class="cn(cvaSheetDescriptionVariants(), props.class)"
        v-bind="delegatedProps"
    >
        <slot />
    </RadixDialogDescription>
</template>
