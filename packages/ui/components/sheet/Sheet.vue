<script setup lang="ts">
import type { SheetRootProps, SheetRootEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<SheetRootProps>();
const emits = defineEmits<SheetRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixDialogRoot v-bind="forwarded">
        <slot />
    </RadixDialogRoot>
</template>
