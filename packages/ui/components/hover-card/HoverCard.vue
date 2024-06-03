<script setup lang="ts">
import type { HoverCardRootEmits, HoverCardRootProps } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<HoverCardRootProps>();
const emits = defineEmits<HoverCardRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixHoverCardRoot v-bind="forwarded">
        <slot />
    </RadixHoverCardRoot>
</template>
