<script lang="ts">
import type { RadioGroupItemSizes, RadioGroupProps, RadioGroupEmits } from "./types";
import { createContext } from "@/lib";

export const [injectRadioGroupContext, provideRadioGroupContext] = createContext<{
    size?: RadioGroupItemSizes;
}>("RadioGroupContext");
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useForwardPropsEmits } from "radix-vue";
import { cvaRadioGroupVariants } from "./cva";
import { cn } from "@/lib/cva";

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: "sm",
});
const emits = defineEmits<RadioGroupEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
provideRadioGroupContext({
    size: props.size,
});
</script>

<template>
    <RadixRadioGroupRoot :class="cn(cvaRadioGroupVariants(), props.class)" v-bind="forwarded">
        <slot />
    </RadixRadioGroupRoot>
</template>
