<script setup lang="ts">
import type { DialogDescriptionProps } from "./types";
import { cvaDialogDescriptionVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib";

const props = defineProps<DialogDescriptionProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixDialogDescription v-bind="forwardedProps" :class="cn(cvaDialogDescriptionVariants(), props.class)">
        <slot />
    </RadixDialogDescription>
</template>
