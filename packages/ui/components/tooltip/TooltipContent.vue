<script setup lang="ts">
import type { TooltipContentProps, TooltipContentEmits } from "./types";
import { cvaTooltipContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<TooltipContentProps>(), {
    theme: "dark",
    size: "md",
    sideOffset: 4,
});

const emits = defineEmits<TooltipContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixTooltipPortal>
        <RadixTooltipContent
            v-bind="{ ...forwarded, ...$attrs }"
            :collision-padding="4"
            :class="cn(cvaTooltipContentVariants({ theme, size }), props.class)"
        >
            <slot />
        </RadixTooltipContent>
    </RadixTooltipPortal>
</template>
