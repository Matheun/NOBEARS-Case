<script setup lang="ts">
import type { PinInputProps, PinInputEmits } from "./types";
import { cvaPinInputVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PinInputProps>(), {
    placeholder: "○",
});
const emits = defineEmits<PinInputEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixPinInputRoot v-bind="forwarded" :class="cn(cvaPinInputVariants(), props.class)">
        <slot />
    </RadixPinInputRoot>
</template>
