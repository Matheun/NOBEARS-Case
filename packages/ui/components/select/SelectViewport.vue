<script setup lang="ts">
import type { SelectViewportProps } from "./types";
import { cvaSelectViewportVariants } from "./cva";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectViewportProps>(), {
    position: "popper",
});
</script>

<template>
    <RadixSelectViewport :class="cn(cvaSelectViewportVariants({ position: props.position }))">
        <slot />
    </RadixSelectViewport>
</template>
