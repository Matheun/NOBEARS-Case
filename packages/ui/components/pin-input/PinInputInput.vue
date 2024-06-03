<script setup lang="ts">
import type { PinInputInputProps } from "./types";
import { cvaPinInputInputVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PinInputInputProps>(), {
    size: "sm",
});

const delegatedProps = computed(() => {
    const { class: _, size, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixPinInputInput
        v-bind="forwardedProps"
        :class="cn(cvaPinInputInputVariants({ size: props.size }), props.class)"
    />
</template>
