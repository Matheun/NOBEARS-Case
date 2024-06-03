<script setup lang="ts">
import type { PopoverAnchorProps } from "./types";
import { useForwardProps } from "radix-vue";

const props = defineProps<PopoverAnchorProps>();

const forwarded = useForwardProps(props);
</script>

<template>
    <RadixPopoverAnchor v-bind="forwarded">
        <slot />
    </RadixPopoverAnchor>
</template>
