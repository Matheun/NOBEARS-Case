<script setup lang="ts">
import type { RadioGroupItemProps } from "./types";
import { cvaRadioGroupItemVariants } from "./cva";
import { injectRadioGroupContext } from "./RadioGroup.vue";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const radioGroupContext = injectRadioGroupContext();
const props = defineProps<RadioGroupItemProps>();

const size = computed(() => radioGroupContext.size || props.size);

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixRadioGroupItem
        v-bind="forwardedProps"
        :class="cn(cvaRadioGroupItemVariants({ size }), props.class)"
    >
        <RadixRadioGroupIndicator class="flex items-center justify-center">
            <ui-icon
                type="solid"
                icon="circle"
                :class="'fill-current text-current ' + (size === 'sm' ? ' size-1.5 ' : ' size-2 ')"
            />
        </RadixRadioGroupIndicator>
    </RadixRadioGroupItem>
</template>
