<script setup lang="ts">
import type { PinInputGroupProps } from "./types";
import { cvaPinInputGroupVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<PinInputGroupProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixPrimitive v-bind="forwardedProps" :class="cn(cvaPinInputGroupVariants(), props.class)">
        <slot />
    </RadixPrimitive>
</template>
