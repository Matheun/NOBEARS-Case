<script setup lang="ts">
import type { DropdownMenuSubProps, DropdownMenuSubEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";

const props = defineProps<DropdownMenuSubProps>();
const emits = defineEmits<DropdownMenuSubEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixDropdownMenuSub v-bind="forwarded">
        <slot />
    </RadixDropdownMenuSub>
</template>
