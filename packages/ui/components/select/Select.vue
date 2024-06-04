<script setup lang="ts">
import type { SelectEmits, SelectProps } from "./types";
import { cvaSelectVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<SelectProps>();
const emits = defineEmits<SelectEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixSelectRoot v-bind="forwarded" :class="cn(cvaSelectVariants(), props.class)">
        <slot />
    </RadixSelectRoot>
</template>
