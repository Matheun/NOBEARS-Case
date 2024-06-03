<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<CollapsibleRootProps>();
const emits = defineEmits<CollapsibleRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixCollapsibleRoot v-slot="{ open }" v-bind="forwarded">
        <slot :open="open" />
    </RadixCollapsibleRoot>
</template>
