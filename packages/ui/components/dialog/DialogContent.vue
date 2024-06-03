<script setup lang="ts">
import type { DialogContentProps, DialogContentEmits } from "./types";
import { cvaDialogOverlayVariants, cvaDialogContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib";

const props = defineProps<DialogContentProps>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixDialogPortal>
        <RadixDialogOverlay :class="cvaDialogOverlayVariants()" />
        <RadixDialogContent v-bind="forwarded" :class="cn(cvaDialogContentVariants(), props.class)">
            <slot />

            <ui-dialog-close />
        </RadixDialogContent>
    </RadixDialogPortal>
</template>
