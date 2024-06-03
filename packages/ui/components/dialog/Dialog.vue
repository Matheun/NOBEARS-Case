<script setup lang="ts">
import type { DialogProps, DialogEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<DialogProps>();
const emits = defineEmits<DialogEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixDialogRoot v-bind="forwarded">
        <slot />
    </RadixDialogRoot>
</template>
