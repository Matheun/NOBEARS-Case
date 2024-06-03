<script setup lang="ts">
import type { DropdownMenuProps, DropdownMenuEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<DropdownMenuProps>();
const emits = defineEmits<DropdownMenuEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixDropdownMenuRoot v-bind="forwarded">
        <slot />
    </RadixDropdownMenuRoot>
</template>
