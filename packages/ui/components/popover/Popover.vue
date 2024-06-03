<script setup lang="ts">
import type { PopoverRootEmits, PopoverRootProps } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<PopoverRootProps>();
const emits = defineEmits<PopoverRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixPopoverRoot v-bind="forwarded">
        <slot />
    </RadixPopoverRoot>
</template>
