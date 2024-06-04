<script setup lang="ts">
import type { CheckboxProps, CheckboxEmits } from "./types";
import { useForwardPropsEmits } from "radix-vue";
import { cvaCheckboxVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<CheckboxProps>(), {
    size: "sm",
});
const emits = defineEmits<CheckboxEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits);

const iconSize = computed(() => {
    if (props.size === "xs") { return "size-3"; }
    return "size-3.5";
});

const iconVariant = computed(() => {
    if (props.checked === "indeterminate") { return "minus"; }
    return "check";
});
</script>

<template>
    <RadixCheckboxRoot
        v-bind="forwarded"
        :class="cn(cvaCheckboxVariants({ size: props.size }), props.class)"
    >
        <RadixCheckboxIndicator class="flex size-full items-center justify-center text-current">
            <slot>
                <ui-icon :class="cn(iconSize, '*:stroke-[3px]')" :icon="iconVariant" />
            </slot>
        </RadixCheckboxIndicator>
    </RadixCheckboxRoot>
</template>
