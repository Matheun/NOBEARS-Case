<script setup lang="ts">
import type { DialogCloseProps } from "./types";
import { cvaDialogCloseVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<DialogCloseProps>();
</script>

<template>
    <RadixDialogClose v-bind="props" :class="cn(cvaDialogCloseVariants(), props.class)" as-child aria-label="Close">
        <slot>
            <ui-button variant="close" class="absolute right-2 top-2" size="sm" />
            <span class="sr-only">Close</span>
        </slot>
    </RadixDialogClose>
</template>
